// pages/course/course.js
Page({
  data:{
    courses:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("onLoad");

    wx.request({
      url:'https://api.getweapp.com/vendor/ketang/course',
      success: (res) => {
        this.setData({
      courses: res.data.courses
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
  selectTab:function(e){
    var that = this,
        index = e.currentTarget.dataset.index,
        coursesArr = that.data.courses;
    console.log("selectTab  ");
    console.log(coursesArr[0].active);
    console.log(e);
    for(var  i = 0;i < coursesArr.length; i++ ){
      coursesArr[i].active = "";//false
    }
      coursesArr[index].active = "true";
      that.setData({courses:coursesArr});
  }
})