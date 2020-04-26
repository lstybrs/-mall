import {request} from "../../request/index"

Page({
  data: {
    swiiperList:[],
    cateList:[],
    floorList:[]

  },
  //options(Object)
  onLoad: function(options){
    // let request = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   data: {},
    //   header: {'content-type':'application/json'},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: (result)=>{
    //     this.setData({
    //       swiiperList:result.data.message
    //     })
    //    },
    // });
   this.getSwiperList()
   this.getcateList()
   this.getfloorList()
  },

  getSwiperList(){
    request({url:"/home/swiperdata"})
    .then(result=>{
      this.setData({
        swiiperList:result.data.message
      })
    })
  },

  getcateList(){
    request({url:"/home/catitems"})
    .then(result=>{
      this.setData({
        cateList:result.data.message
      })
    })
  },

  getfloorList(){
    request({url:"/home/floordata"})
    .then(result=>{
      this.setData({
        floorList:result.data.message
      })
    })
  },


  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});