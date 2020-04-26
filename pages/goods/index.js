// pages/goods/index.js
import {request} from "../../request/index"
import regengeratorRuntime from '../../lib/runtime/runtime'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[{
      id:0,
      value:'综合',
      isActive:true
    },
    {
      id:1,
      value:'销量',
      isActive:false
    },
    {
      id:2,
      value:'价格',
      isActive:false
    }],
    goods_list:[]
  },

  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  totalPage:1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid
    this.getGoodsList()
  },

  async getGoodsList(){
    const res = await request({url:"/goods/search",data:this.QueryParams})
    // console.log(res)
    const {total} = res.data.message
    this.totalPage = Math.ceil(total/this.QueryParams.pagesize)
    // console.log(this.totalPage)
    this.setData({
      goods_list:[...this.data.goods_list,...res.data.message.goods]
    })
    wx.stopPullDownRefresh()
  },


  handletabItemChane(e){
    const {index} = e.detail
    let {tabs} = this.data
    tabs.forEach((v,i) => i===index?v.isActive=true:v.isActive=false)
    this.setData({
      tabs
    })
  },

  onReachBottom:function(){
    if(this.QueryParams.pagenum>=this.totalPage){
      wx.showToast({
        title: '没有下一页数据了',
      });
        }else{
      this.QueryParams.pagenum++
      this.getGoodsList()
    }
  },

  onPullDownRefresh(){
    this.setData({
      goods_list:[]
      
    })
    this.QueryParams.pagenum=1
    this.getGoodsList()
  }

})