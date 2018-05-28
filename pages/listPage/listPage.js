Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[{
      iconImage:"http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName:"借钱花花",
      des:"期限 24期 年利率:36%",
      loanMount:"2000.00"
    }, {
      iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName: "借钱花花",
      des: "期限 24期 年利率:36%",
      loanMount: "2000.00"
      }, {
        iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
        itemName: "借钱花花",
        des: "期限 24期 年利率:36%",
        loanMount: "2000.00"
    }, {
      iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName: "借钱花花",
      des: "期限 24期 年利率:36%",
      loanMount: "2000.00"
    },
    {
      iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName: "借钱花花",
      des: "期限 24期 年利率:36%",
      loanMount: "2000.00"
    }, {
      iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName: "借钱花花",
      des: "期限 24期 年利率:36%",
      loanMount: "2000.00"
    }, {
      iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName: "借钱花花",
      des: "期限 24期 年利率:36%",
      loanMount: "2000.00"
    }, {
      iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
      itemName: "借钱花花",
      des: "期限 24期 年利率:36%",
      loanMount: "2000.00"
    },
    ],
    text:"加载中...",
    totalPage:5,
    index:1,
    pageSize:10,
    isLoading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  scrolltolower:function(e){
    console.log("上拉刷新");

  },
  /**
  * 页面上拉触底事件的处理函数
  */
  scrolltoupper: function (e) {
    /*显示加载中的文字*/
    this.setData({
      isLoading:true
    })
    /*添加数据*/
    if(this.data.index>this.data.totalPage||this.data.isLoading){
      //如果正在加载 或者 已经请求完毕了
      return;
    }
    setTimeout(function(){

      var obj = {
        iconImage: "http://123.57.70.38:18888/JQHHWeb/icon/jqhh_14.png",
        itemName: "借钱花花",
        des: "期限 24期 年利率:36%",
        loanMount: "2000.00"
      };

      for(var i=0;i<this.data.pageSize;i++){
        this.data.lists.push(obj);
      }
      /*添加数据 去掉loading*/
      this.setData({
        lists:this.data.lists,
        isLoading:false
      })

    },3000);
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