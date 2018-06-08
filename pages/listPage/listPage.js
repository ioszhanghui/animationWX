
var util = require('../../utils/util.js');
var network = require('../../utils/network.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [],//列表数据
    totalPage: 3,
    index: 1,
    pageSize: 10,
    param: {
      pager_index: "1",
      pager_size: "10",
      loan_money: "",
      loan_day: "",
      condition: ""
    },
    isLoading:false,
    complete:false
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  scrolltolower:function(e){
    var that =this;
    console.log(this.data.index+"请求的页数");
    if (this.data.index > this.data.totalPage) {
      //如果正在加载 或者 已经请求完毕了
      this.setData({
        complete: true
      });
      return;
    }
    //正在请求还没响应过来
    if (this.data.isLoading) {

      return;
    }
    /*显示加载中的文字*/
    this.setData({
      isLoading: true
    })

    this.data.param.pager_index =this.data.index;
    util.requestShopList(this.data.param, function (data) {
      //拼接数据
      that.data.lists = that.data.lists.concat(data.list);
      that.setData({
        lists: that.data.lists.concat(data.list),
        isLoading: false,
        index: ++that.data.index,
        totalPage: data.total_pager
      })
  })
  
  },
/*进入首页请求*/
  onLoad:function(){

    var that = this;
    util.requestShopList(this.data.param, function (data) {
      /*添加数据 去掉loading*/
      /*添加数据 去掉loading*/
      console.log(that.data.lists.concat(data.list) + "拼接的数据");
      that.data.lists = that.data.lists.concat(data.list);
      that.setData({
        lists: that.data.lists.concat(data.list),
        isLoading: false,
        index: ++that.data.index,
        totalPage: data.total_pager
      })
    })

    network.RequestPost({
      param: {
        paramJson: JSON.stringify(that.data.param)
        },
      url: "http://123.57.70.38:8888/JJDKWeb/MarchProductInfo.spring",
      success: function (res) {
        console.log(res +"network结果");
      },
      fail: function () {

      }
    })
  },
  /**
  * 页面上拉触底事件的处理函数
  */
  scrolltoupper: function (e) {
    /*添加数据*/
    console.log("下拉加载");
  this.setData({
    index:1
  })
  }
})