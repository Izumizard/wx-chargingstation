// index.js
Page({
  data: {  
    no_scroll: true,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },
  onShow:function(){
    this.tabBar() ;
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
},
onLoad(options){
  var that = this;
  wx.getLocation({
    type:"gcj02",
    success:function(res){
     
      that.setData({
        latitude:res.latitude,
        longitude:res.longitude,
        markers:[
          {
            id:1,
            longitude:res.longitude,
            latitude:res.latitude,
            iconPath:"../../assets/images/location.png",
            width:"80rpx",
            height:"80rpx",
            callout:{
              content:"当前位置",
              color:'#161823',
              fontSize:14,
              borderRadius:8,
              bgColor:'#fff',
              borderWidth:1,
              borderColor:'#000000',
              padding:2,
              display:'ALWAYS'
            }
          }
        ]
      })
    }
  })
},

goTop: function (e) {
  if (wx.pageScrollTo) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  } else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
},
onPageScroll: function (e) {
  if (e.scrollTop > 200) {
    this.setData({
      no_scroll: false
    });
  } else {
    this.setData({
      no_scroll: true
    });
  }
}
})

