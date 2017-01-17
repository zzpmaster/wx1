Page({
  data:{
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onLoad");

    var posts_content = [{
      date: 'Jan 13 2017',
      title: '人工智能与机器学习',
      post_img: '/images/news/n1.png',
      author_img: '/images/avatar/avatar_1.png',
      content: '提到人工智能，就一定离不开机器学习。机器学习中比较火的一个主题——深度学习，已经在人脸识别、图像识别、语音识别，自然语言理解NLP技术、大数据挖掘技术、无人驾驶技术等领域获得了应用。Open AI研究科学家Durk Kingma预测，未来3年，DNN、反向传播、SGD仍将是主要的技术。',
      view_num: 92,
      collect_num: 65
    }, {
      date: 'Jan 14 2017',
      title: '微信开发',
      post_img: '/images/news/n2.png',
      author_img: '/images/avatar/avatar_1.png',
      content: '2017年开年，筹备一年的小程序正式发布，引发了行业不小的地震，其带来的应用程序存在方式与现有App模式大有不同，掀起了技术热潮。无需安装用完即走的“触手可及”概念、多种接入方式等便捷的特点可以预见第三方小程序的市场巨大，微信也成为连接PaaS和SaaS的平台。',
      view_num: 92,
      collect_num: 120
    }];

    this.setData({
      'post_key': posts_content
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