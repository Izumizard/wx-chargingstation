// pages/mine/mine.js

Page({


  data: {
    showPopup: false,
    wechat: 'customer_service', 
  },
  //登录
  gotoLogin(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  //复制
  copyText:function() {
    wx.setClipboardData({
      data: this.data.wechat,
      success: () => {
        // 复制成功后的回调函数
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 1000
        });
        setTimeout(() => {
          this.setData({
            showToast: false
          });
        }, 1000);
        this.hidePopup();
      }
    });
  },
 //导航选中
  onShow:function(){
    this.tabBar() ;
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
},
 //我的账户
 walletClick(){
  wx.navigateTo({
    url: '../myWallet/myWallet',
})
},
 //我的余额
 balanceClick(){
  wx.navigateTo({
    url: '../myBalance/myBalance',
})
},
 // 我的收藏
 collectClick() {
  wx.navigateTo({
      url: '../myCollect/myCollect',
  })
},

 // 账户充值
 depositClick() {
  if (this.data.showPopup) {
    return;
  }
  wx.navigateTo({
      url: '../deposit/deposit',
  })
},
 // 我的设置
setClick() {
  wx.navigateTo({
      url: '../mySetting/mySetting',
  })
},
 //联系客服
 showPopup() {
  this.setData({
    showPopup: true,
  });
},
hidePopup() {
  this.setData({
    showPopup: false
  });

},

    

})
