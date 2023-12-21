// pages/huiyuan/huiyuan.js
const app = getApp()
const defaultAvatar = '/images/avatar.png'
Page({
  data: {
    avatarUrl: defaultAvatar,
  },
  onChooseAvatar: function (e) {
    console.log(e)
    const { avatarUrl } = e.detail
    this.setData({ avatarUrl })
  },  
})