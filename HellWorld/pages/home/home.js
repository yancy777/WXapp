Page({
  data: {
    message: 'Hello MINA!',
    array:[1,2,3,4,5,6]
  },
   onLoad: function(options) {
    this.setData({
      title: options.title
    })
  }
})