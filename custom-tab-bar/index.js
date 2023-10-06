
// custom-tab-bar/index.js
Component({
  properties:{

  },
  data:{
    //当前选中
    selected: 0,
    //tabBar页面数据 
    tabList: [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的"
      },
      {
        "pagePath": "pages/scanPage/scanPage",
        "text": "扫一扫"
      }
]
  },
  
  attached: function() {},

  methods: {
    //底部切换
    switchTab(e) {
      let key = Number(e.currentTarget.dataset.index);
      let tabList = this.data.tabList;
      let selected= this.data.selected;
      
      if(selected !== key){
        this.setData({
          selected:key
        });
        wx.switchTab({
          url: `/${tabList[key].pagePath}`,
        })
      }
    },
    
    //点击动画
    toggle(e) {
      console.log(e);
      var anmiaton = e.currentTarget.dataset.class;
      var that = this;
   
      // wx.scanCode()({
      //   success(res){
      //     console.log(res)
      //     that.setData({
            
      //     })
      //   }
      // })
      that.setData({
        animation: anmiaton
      })
    //   setTimeout(function() {
    //     that.setData({
    //       animation: ''
    //     })
    //   }, 10)
    // },
  }
}
})