// pages/goos/index.js
import {request} from "../../request/index"
import regengeratorRuntime from '../../lib/runtime/runtime'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:{}
  },

  goods_info:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id} = options
    this.getGoodsDetail(goods_id)
  },

  async getGoodsDetail(goods_id){
    const res = await request({url:"/goods/detail",data:{goods_id}})
    this.goods_info = res.data.message
    console.log(res)
    this.setData({
      goods:{
        goods_name:res.data.message.goods_name,
        goods_price:res.data.message.goods_price,
        goods_introduce:res.data.message.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics:res.data.message.pics
      }
    })
  },
  handleImage(e){
    const urls = this.goods_info.pics.map(v => v.pics_mid)
    const current = e.currentTarget.dataset.url
    wx.previewImage({
      current,
      urls: urls
    });
    }
})