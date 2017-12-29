
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
            res.hobby = res.star_hobby.split(' ').slice(0, 3);
            res.style = res.star_style.split(' ').slice(0, 3);
            res.field = res.star_field.split(' ').slice(0, 3);
            that.setData({
                info: res
            })
        }).catch((e) => {
            console.log(res);
        });

    }
})