Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[{
      money:"50",
      activity:"双十一活动",
      reduce_acitivity:"满400减20",
      outtime:"2018-0622 09:43:48",
      isuse:"1"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj =options;
    console.log(decodeURIComponent(obj.imageurl)+"图片链接");
    console.log(obj.imageurl+"图片链接");
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