// pages/login/login.js
Page({


  data: {
    focus: [false, false],//focus聚焦输入框
    inputType: 'password',// 初始状态下，密码输入框类型为密码（密文）
    account: '',
    password: '',
    isButtonDisabled: true
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
  

//输入密码时显示明文，过三秒变为密文
onInput(e) {
  const value = e.detail.value;
  this.setData({
    inputType: 'text' // 显示明文
  });

  setTimeout(() => {
    this.setData({
      inputType: 'password' // 显示密文
    });
  }, 3000);
},

//输入框/ 按钮颜色变化
onAccountInput(event) {
  const value = event.detail.value;
  this.setData({
    account: value,
    isButtonDisabled: !(value && this.data.password)
  });
},

onPasswordInput(event) {
  const value = event.detail.value;
  this.setData({
    password: value,
    isButtonDisabled: !(this.data.account && value)
  });
},

onSubmit() {
  if (!this.data.isButtonDisabled) {
    // 账号和密码都有值，执行登录操作
    // TODO: 在这里编写登录逻辑
  }
},

//快速登录
quickLogin(){
  wx.navigateTo({
    url: '../quickLogin/quickLogin',
  })
},
//立即注册
myRegister(){
  wx.navigateTo({
    url: '../registerPage/registerPage',
  })
},
})
