// pages/mystudy/mystudy.js
Page({
  data:{
    studied:[],
    downTitle_left:'下载的课程',
    downTitle_right:'>',
    count:3,
    day:1,
    userImgSize:160,
    styStateAnimation:{},
    userImgAnimation:{},
    hidden:"false",
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url:'https://api.getweapp.com/vendor/ketang/mystudy',
      success: (res) => {
        this.setData({
        studied:res.data.studied
      });
      }
    })
   
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  scrooll:function(e){
    var that = this,
        top = e.detail.scrollTop,
        hid = "false",
        ratio = 1 - top/that.data.userImgSize,
        animation = {},   //文字动画
        headAmt = {};     //头像动画    
        
       console.log(e);
       console.log("比率"+ ratio);
      if(top > 400 -130){                   //upper过多
          hid = "true";
       }else{
          animation = wx.createAnimation({
              transformOrigin: "50% 50%",
              timingFunction: "linear",
              delay: 0
            });
           animation.scale(ratio,ratio).opacity(ratio).step();

           headAmt = wx.createAnimation({
              transformOrigin: "50% 50%",
              timingFunction: "linear",
              delay: 0
            });
           headAmt.scale(ratio,ratio).opacity(ratio).translateY(top*2).step();//2是因为为rpx与px的原因 
       }
       that.setData({
         hidden:hid,
         styStateAnimation:animation.export(),
         userImgAnimation:headAmt.export(),
       });
       console.log(that.data);
  }
})