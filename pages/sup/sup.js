
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
    console.log(this+"this");
  },
  /*领取优惠券*/
  useSup: function (options){
    var that = this;
    var index = parseInt(options.currentTarget.dataset.index);
    var obj =this.data.lists[index];
    if (obj.is_get == 1){
      console.log("领取过了");
      return;
    }
    network.RequestPost({
      param: {
        open_id: "1",
        discount_id:obj.discount_id+""
      },
      url: "http://39.105.115.133:8081/getCoupons",
      success: function (res) {
        if(res.code==200){
          wx.showToast({
            title: '领取成功',
          });
          //刷新一下
          obj.is_get ="1";
          that.setData({
            lists: that.data.lists
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
        type:"all"
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
  }
})