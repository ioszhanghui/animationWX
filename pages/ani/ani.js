Page({
data:{
  animation:{},
  count:3,
  leftval:-76,
  list:[],
  indexs:[1,2,3,4,5,6,7],
  show:true,
  style:'left:0px;top:0px;' ,
  ani:{},
  index:1,
  resetAni:{}
  },
onLoad:function(){
  // var animation = wx.createAnimation({
  //   duration: 3000,
  //   timingFunction: "linear"
  // })
  // animation.translate(100, 100).rotate(180).step();
  // this.setData({
  //   animation: animation.export()
  // })
},
  click:function(){

    if(this.data.list.length>0){
      this.setData({
        style: 'left:0px;top:0px;',
        list: [],
        indexs:[]
      })
    }
    var that =this;
    setTimeout(function(){
      that.addData();
    },1000)
  },
  addData:function(){

    var list = this.data.list;
    var that = this;
    for (var i = 0; i < this.data.count; i++) {
      var animation = wx.createAnimation({
        duration: 3000,
        timingFunction: "linear"
      })
      // animation.translate((Math.random() * 200 + 100) + 10, 50 * i + 10).rotate(180).step();
      animation.translate(100, 150).rotate(180).step({
        delay:500
      });
      var obj = [{
        ani: animation.export()
      }]
      console.log(animation.export() + "export");
      list = list.concat(obj);
    }

    var animation1 = wx.createAnimation({
      duration:0,
      timingFunction: "linear"
    })
    // animation.translate((Math.random() * 200 + 100) + 10, 50 * i + 10).rotate(180).step();
    animation1.translate(-100, -150).rotate(0).step();

    this.setData({
      resetAni: animation1.export(),
      list: list,
      indexs: [1, 2, 3, 4, 5, 6, 7],
      show: true,
    })

    this.setData({
      resetAni: animation1.export()
    })
  },
  remove:function(){
    var animation = wx.createAnimation({
      duration: 3000,
      timingFunction: "linear"
    })
    animation.rotate(180*this.data.index).step();
    this.setData({
      index:++this.data.index,
      animation:animation.export()
    })

  }
})