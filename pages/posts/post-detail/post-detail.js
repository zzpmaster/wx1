var postsData = require('../../../data/posts-data.js');

Page({
    data:{
        isPlaying: false
    },
    onLoad: function(options) {
        var that = this;
        this.setData({
            'currentPostId': options.id
        });

        var id = parseInt(options.id, 10);
        var postData;
        var dataList = postsData.postList;
        for (var i = 0; i < dataList.length; i++) {
            if (dataList[i].id === id) {
                postData = dataList[i];
            }
        }
        this.setData({
            'postData': postData
        });

        // 读取缓存
        var collected = wx.getStorageSync('posts_collected');
        if (collected) {
            this.setData({
                'collected': collected[options.id]
            });
        } else {
            var collected = {};
            collected[options.id] = false;
            wx.setStorageSync('posts_collected', collected);
        }

        wx.onBackgroundAudioPlay(function() {
            that.setData({
                'isPlaying': true
            });
        });

        wx.onBackgroundAudioPause(function() {
            that.setData({
                'isPlaying': false
            });
        });
    },

    onCollectionTap: function() {
        var postsCollected = wx.getStorageSync('posts_collected');
        var collected = postsCollected[this.data.currentPostId];
        collected = !collected;
        postsCollected[this.data.currentPostId] = collected;
        // 更新文章收藏的缓存值
        wx.setStorageSync('posts_collected', postsCollected);
        // 更新数据绑定
        this.setData({
            'collected': collected
        });
        wx.showToast({
            title: collected ? '收藏成功' : '取消成功',
            icon: 'success',
            duration: 1200
        });
    },

    onShareTap: function() {
        //清除缓存
        //本地数据存储的大小限制为 10MB
        //wx.clearStorageSync();
        var items = [
            '分享给微信好友', 
            '分享到微信朋友圈', 
            '分享到QQ'
        ];
        wx.showActionSheet({
            itemList: items,
            success: function(res) {
                console.log(res.tapIndex);
                console.log(items[res.tapIndex]);
            }
        })
    },

    onMusicTap: function() {
        var that = this;
        wx.getBackgroundAudioPlayerState({
            success: function(res) {
                var status = res.status
                if (status === 2 || status === 0) {
                    wx.playBackgroundAudio({
                        dataUrl: that.data.postData.music.url,
                        title: that.data.postData.music.title,
                        coverImgUrl: that.data.postData.music.coverImg
                    });
                } else {
                    wx.pauseBackgroundAudio();
                }
                that.setData({
                    'isPlaying': status === 2 || status === 0
                })
            }
        })

        
    }
})