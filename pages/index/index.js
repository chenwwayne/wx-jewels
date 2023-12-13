// index.js
Page({
  data: {
    imgUrls: [
      {
      "swiperurl": 'https://static.pomellato.cn/media/wysiwyg/STORY01_BLOCK02_POS07_IMAGE01_W00020.jpg',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurl": 'https://static.pomellato.cn/media/wysiwyg/STORY01_BLOCK02_POS07_IMAGE02_W00021.jpg',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurl": 'https://static.pomellato.cn/media/wysiwyg/STORY01_BLOCK04_POS10_IMAGE01_W000026.jpg',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurl": 'https://static.pomellato.cn/media/wysiwyg/STORY01_BLOCK02_POS11_IMAGE01_W000030_2.jpg',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurl": 'https://static.pomellato.cn/media/wysiwyg/STORY01_BLOCK02_POS12_IMAGE01_W000032_2.jpg',
      "navigateTo": '/pages/shopping/shopping'
  },

        
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
        {
            "iconUrl": 'https://static.pomellato.cn/media/wysiwyg/23_1.jpg',
            "iconText": '戒指',
            "navigateTo": '/pages/shopping/shopping'
        },
        {
            "iconUrl": 'https://static.pomellato.cn/media/wysiwyg/STORY01_BLOCK04_POS01_IMAGE01_W000001.jpg',
            "iconText": '项链',
            "navigateTo": '/pages/shopping/shopping'
        },
        {
            "iconUrl": 'https://static.pomellato.cn/media/wysiwyg/3_27.jpg',
            "iconText": '手链',
            "navigateTo": '/pages/shopping/shopping'
        },
        {
            "iconUrl": 'https://static.pomellato.cn/media/wysiwyg/47.jpg',
            "iconText": '耳饰',
            "navigateTo": '/pages/shopping/shopping'
        },
    ],
    imgUrlss: [
      {
        "swiperurls": 'https://static.pomellato.cn/media/wysiwyg/shop6_2.png',
        "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurls": 'https://static.pomellato.cn/media/wysiwyg/shop5_2.png',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurls": 'https://static.pomellato.cn/media/wysiwyg/shop4_2.png',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurls": 'https://static.pomellato.cn/media/wysiwyg/__20230802103648_3.png',
      "navigateTo": '/pages/shopping/shopping'
    },
    {
      "swiperurls": 'https://static.pomellato.cn/media/wysiwyg/__20230802103641_2.png',
      "navigateTo": '/pages/shopping/shopping'
  },
    ],
    itemArray: [
        {
            "itemUrl": 'https://static.pomellato.cn/media/wysiwyg/1_31.jpg',
            "itemText": 'BRACCIALE SHADES OF THE RAINBOW',
            "navigateTo": '/pages/shopping/shopping'
        },
        {
            "itemUrl": 'https://static.pomellato.cn/media/wysiwyg/STORY04_HERO_DESKTOP.jpg',
            "itemText": 'TANZANITE BAHIA RIVIÈRE',
            "navigateTo": '/pages/shopping/shopping'
        },
        {
            "itemUrl": 'https://static.pomellato.cn/media/wysiwyg/STORY08_HERO_DESKTOP.jpg',
            "itemText": 'GOURMETTE ASSOLUTA',
            "navigateTo": '/pages/shopping/shopping'
        },
    ],
    itemArrays: [
      {
          "itemUrls": 'https://static.pomellato.cn/media/wysiwyg/1_31.jpg',
          "itemText": '  品  牌  故  事  ',
      },
  ],
}, 
gotoPage: function (event) {
  const url = event.currentTarget.dataset.url;
  console.log(url)
  wx.navigateTo({
    url:url,
  });
},
gotoNext:function(){
  wx.switchTab({
    url: '/pages/story/story',
  })
}
// gotoPages: function (event) {
//   const url = event.currentTarget.dataset.url;
//   console.log(url)
//   wx.navigateTo({
//     url: url,
//   });
// },
})
