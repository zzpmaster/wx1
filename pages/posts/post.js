// 不能使用绝对路径，只能用相对路径
// 使用require方法加载js模块文件
var postData = require('../../data/posts-data.js');

Page({
  data:{
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onLoad");

    this.setData({
      'post_key': postData.postList
    });
    //这种方式已经失效，在较早的版本中可以使用
    //this.data.post_key = postData.postList;
  },
  onPostTap: function(event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + id
    });
  },
  onSwiperTap: function(event) {
    // target 当前点击的组件， currentTarget事件捕获的组件
    var id = event.target.dataset.id;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + id
    });
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("onReady");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("onShow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("onHide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onUnload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})