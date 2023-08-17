Page(
  {
    data:{
      msg:"这是一段仿后端返回的文本"
    },

    onLoad:function(options){
      this.setData({
        "a":"function"
      })
    },

    ontap:function(){
      console.log("123")
      wx.navigateTo({
        url: '/pages/post/post',
      })
    }
  }
)