// index.js
var json = require("../../data/classify_data.js")

Page({
  data: {
    active:0,
    currentTab:0
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
  },

  onLoad() {
    this.setData({
      main_key: json.homeIndex
    })
  },

  gotoshopping: function() {
    wx.navigateTo({
      url: '/pages/shopping/shopping',
    })
  }

 })
