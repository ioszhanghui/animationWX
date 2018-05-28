Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: "",
    longitude: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  var that =this;
    wx.getLocation({
      altitude:true,
      type:"gcj02",
      success: function(res) {
        console.log(res.latitude + "经度" + res.longitude+"纬度");
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
    })
    
  },
  locationChoose:function(){
    var that = this;

    var obj1="我是忠个";
    var obj2 ="我是忠个";
    if(obj1===obj1){
      console.log(obj1 === obj1);
    }

    var strA = "i love you!";
    var strB = new String("i love you!");
    console.log(strA == strB);
    console.log(strA === strB);


    wx.openLocation({
      latitude: that.data.latitude,
      longitude: that.data.longitude,
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})