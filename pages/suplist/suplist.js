var network =require('../../utils/network.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  /*加载数据*/
  loadData: function () {

    var that = this;
    network.RequestPost({
      param: {
        open_id: "1",
        type:"is_get"
      },
      url: "http://39.105.115.133:8081/getBonusList",
      success: function (res) {
        that.setData({
          list: res.data
        })
      },
      fail: function () {

      }
    })
  },
  goToNextPage:function(opitions){
    var item = opitions.currentTarget.dataset.result;
    console.log(JSON.stringify(item)+"参数");
    wx.navigateTo({
      url: '../supdetail/supdetail?itemJson=' + JSON.stringify(item),
    })
  },
onLoad:function(){
  this.loadData();//加载数据
}
})