//index.js
//获取应用实例
const app = getApp()
/*动画*/
var list =[];

function addData(){

for(var i=0;i<3;i++){

  var jsonObj ={
    animation: animation.export(),
    left:i*30,
    top:i*30
  }
  console.log(jsonObj.left+"顶部"+jsonObj.top);
  list.push(jsonObj);
}
return list;
}

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData:{},
    list:list,
    ani:{}
  },
  click:function(){
    var animation = wx.createAnimation({
      duration:2000,
      timingFunction: 'ease',
    })
   animation.translate(100,100).rotate(180).step();
   var obj ={
     animation: animation.export()
   }
   this.setData({
     ani: obj
   });
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  addData:function(){
    for(var i=0;i<3;i++){
      var animation = wx.createAnimation({
        duration: 2000,
        timingFunction: 'ease',
      })
      animation.translate(100, 100).rotate(180).step();
      var obj = {
        animation: animation.export(),
        left: i * 100,
        top: i * 50
      }
      list.push(obj);
      this.setData({
        list:list
      });
    }
  },
  onShow:function(){
    /*添加视图*/
    this.addData();
    /*获取系统的屏宽屏高*/
    // wx.getSystemInfo({
    //   success: function (res) {
    //     /*保存屏幕的宽高信息*/
    //     app.globalData.screenWidth = res.screenWidth;
    //     app.globalData.screenHeight = res.screenHeight;
    //     app.globalData.nviHight = res.screenHeight - res.windowHeight;
    //     console.log(res.statusBarHeight + "状态栏的高度");
    //     console.log("屏宽" + app.globalData.screenWidth + "高" + app.globalData.screenHeight + "导航调" + app.globalData.nviHight);
    //     that.setData({
    //       screenHight: res.screenHeight
    //     })
    //   },
    // })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
