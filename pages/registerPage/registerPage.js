// pages/register/register.js
Page({

  data: {
    focus: [false, false],//focus聚焦输入框
    inputType: 'password',// 初始状态下，密码输入框类型为密码（密文）
    inputEmpty: true,
    show: false,
  },

//focus聚焦失焦输入框
  onFocus(e) {
    const index = e.currentTarget.dataset.index;// 获取输入框的索引
    const focus = this.data.focus;
    focus[index] = true;// 设置对应索引的输入框获得焦点
    this.setData({
      focus: focus
    });
  },
  onBlur(e) {
    const index = e.currentTarget.dataset.index;// 获取输入框的索引
    const focus = this.data.focus;
    focus[index] = false;// 设置对应索引的输入框失去焦点
    this.setData({
      focus: focus
    });
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },



  
})