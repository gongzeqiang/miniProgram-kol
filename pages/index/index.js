import getKolList from "../../action/get-kolList";
import getNoticeList from '../../action/get-NoticeList';

const app = getApp()

Page({
    data: {
        nav: 'notice',
        kol: {
            pageNumber: 1,
            pageSize: 10,
            list: []
        },
        notice: {
            pageNumber: 1,
            pageSize: 10,
            list: []
        },
        isLoadingKol: '',
        isLoadingNotice: '',
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
        date: '2017-10-11'
    },
    chooseNav: function(e){
        var nav = e.currentTarget.dataset.nav;
        this.setData({nav});
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
    },
    onReady () {
        let kol = this.data.kol;
        let notice = this.data.notice;
        let kolData = {
            pageNumber: kol.pageNumber,
            pageSize: kol.pageSize
        };
        let noticeData = {
            pageNumber: notice.pageNumber,
            pageSize: notice.pageSize
        };

        getKolList(kolData).then((res) => {
            kol.list = res.list;
            kol.list.forEach(el => {
            el.field = el.star_field.split(' ').slice(0,3);
            });
            this.setData({kol});
        }).catch((e) => {
            console.log(e);
        });
        
        getNoticeList(noticeData).then((res) => {
            console.log(res);
            notice.list = res.list;
            this.setData({notice});
        }).catch(() => {
            console.log(e);
        })

    },
    onReachBottom () {

        if (this.data.nav == 'kol') {
            let kol = this.data.kol;
            kol.pageNumber++;
            let data = {
                pageNumber: kol.pageNumber,
                pageSize: kol.pageSize
            };
            let that = this;
            this.setData({
                isLoadingKol: 'load'
            });
            wx.showLoading({
                title: '正在加载中',
                success () {
                    getKolList(data).then((res) => {
                        if (res.list.length != 0) {

                            res.list.forEach((el, i) => {
                                if(el.star_field != null){
                                    el.field = el.star_field.split(' ').slice(0,3);
                                }else{
                                    el.field = [];
                                }
                            });
                            kol.list = [...kol.list, ...res.list];

                            that.setData({
                                kol,
                                isLoadingKol: ''
                            });
                        } else {

                            that.setData({
                                kol,
                                isLoadingKol: 'over'
                            });

                        }

                        wx.hideLoading();

                    }).catch((e) => {

                        console.log(e);
                        that.setData({
                            kol,
                            isLoadingKol: 'over'
                        });
                        wx.hideLoading();
                    });
                }
            });
        } else {
            let notice = this.data.notice;
            notice.pageNumber++;
            let data = {
                pageNumber: notice.pageNumber,
                pageSize: notice.pageSize
            };
            let that = this;
            this.setData({
                isLoadingNotice: 'load'
            });
            wx.showLoading({
                title: '正在加载中',
                success () {
                    getNoticeList(data).then((res) => {
                        if (res.list.length != 0) {
                            
                            notice.list = [...notice.list, ...res.list];
                            that.setData({
                                notice,
                                isLoadingNotice: ''
                            });
                        } else {

                            that.setData({
                                notice,
                                isLoadingNotice: 'over'
                            });

                        }

                        wx.hideLoading();

                    }).catch((e) => {

                        console.log(e);
                        that.setData({
                            notice,
                            isLoadingKol: 'over'
                        });
                        wx.hideLoading();
                    });
                }
            });
        }

    }
})
