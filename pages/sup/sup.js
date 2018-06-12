
var network = require('../../utils/network.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    lists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loadData();
  },
  /*领取优惠券*/
  useSup: function (options){
    var that = this;
    let index = parseInt(options.currentTarget.dataset.index);
    console.log(index+"index");
    console.log(JSON.stringify(that.lists));
    if (that.lists[index].is_get == 1){
      console.log("领取过了");
      return;
    }
    network.RequestPost({
      param: {
        open_id: "1",
        discount_id: that.lists[index].discount_id
      },
      url: "http://39.105.115.133:8081/getBonusList",
      success: function (res) {
        if(res.code==200){
          wx.showToast({
            title: '领取成功',
          })
          //刷新一下
          that.lists[index].is_get ="1";
          that.setData({
            lists: that.lists
          })
        }
      },
      fail: function () {

      }
    })
  },
  /*加载数据*/
  loadData:function(){

    var that = this;
    network.RequestPost({
      param: {
        open_id:"1",
      },
      url: "http://39.105.115.133:8081/getBonusList",
      success: function (res) {
        that.setData({
          lists:res.data
        })
      },
      fail: function () {

      }
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