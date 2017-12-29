import {DOMAIN} from '../config/config.js';

const path = '/announcement/detail';

const url = DOMAIN + path;

function getNoticeDetail (data) {
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data,
            success (res) {
                resolve(res.data);
            },
            fail (res) {
                reject(res);
            }
        });
    });
}

export default getNoticeDetail;

