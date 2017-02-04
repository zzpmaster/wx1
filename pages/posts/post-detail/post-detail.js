var postsData = require('../../../data/posts-data.js');

Page({
    data:{
    },
    onLoad: function(options) {
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
    },

    onShareTap: function() {
        //清除缓存
        //本地数据存储的大小限制为 10MB
        wx.clearStorageSync();
    }
})