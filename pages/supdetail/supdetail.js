Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = options.itemJson;
    this.setData({
      data: JSON.parse(obj)
    })
  }
})