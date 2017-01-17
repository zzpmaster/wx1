Page({
    onTap: function() {
        // wx.navigateTo({
        //     url: "../posts/post"
        // });

        wx.redirectTo({
            url: "../posts/post"
        });
        // console.log('onTap');
    },
    /* 
        冒泡与非冒泡 
        bindtap 当点击子元素时，父元素的方法也会执行。如果想阻止调用父元素，使用catchtap
    */
    onTextTap: function() {
        //console.log('onTextTap');
    }
})