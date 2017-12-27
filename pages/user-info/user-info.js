
import getKolDetail from '../../action/get-kolDetail';
Page({
    data: {
        info:{}
    },
    totop: function(){
        wx.pageScrollTo({
            scrollTop: 0
        });
    },
    onLoad (e) {
        const id = e.id;
        let that = this;

        getKolDetail({
            netredID: id
        }).then((res) => {
            console.log(res);
            res.profession = res.star_profession.split(' ').slice(0, 3).join('/');
            that.setData({
                info: res
            })
        }).catch((e) => {
            console.log(res);
        });

    }
})