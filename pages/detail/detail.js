
import getNoticeDetail from '../../action/get-NoticeDetail';

Page({
    data: {
        info: {}
    },
    onLoad (e) {
        const id = e.annoID;

        getNoticeDetail({
            annoID: id
        }).then((res) => {
            this.setData({
                info: res
            })
        }).catch((e) => {
            console.log(e);
        });
    }
})