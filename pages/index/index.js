//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nav: 'kol',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    aStyle: [{
      id: 0,
      value: '方式不限'
    },{
      id: 1,
      value: '线上活动'
    },{
      id: 2,
      value: '线下活动'
    }],
    styleIndex: 0,
    aSex: [{
      id: 0,
      value: '性别不限'
    },{
      id: 1,
      value: '线上活动'
    },{
      id: 2,
      value: '线下活动'
    }],
    sexIndex: 0,
    date: '2017-05-01'
  },
  chooseNav: function(e){
    var nav = e.currentTarget.dataset.nav;
    this.setData({
      nav
    });
  },
  chooseStyle: function(e){
    this.setData({
      styleIndex: e.detail.value
    })
  },
  chooseSex: function (e) {
    this.setData({
      sexIndex: e.detail.value
    })
  },
  chooseDate: function(e){
    this.setData({
      date: e.detail.value
    })
  }
})
