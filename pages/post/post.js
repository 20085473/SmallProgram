// pages/post/post.js

const { postList } = require("../../data/data.js")
var postdata=require("../../data/data.js")
console.log(postdata)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:"这是文章标题",
    "flag":true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      "post":postList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  goToPostDetail(){
    wx.redirectTo({
      url: '/pages/post-detail/post-detail'
    })
  }
})