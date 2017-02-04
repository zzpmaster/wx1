var postsData = require('../../../data/posts-data.js');

Page({
    onLoad: function(options) {
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
    }
})