import {DOMAIN} from '../config/config.js';

const path = '/announcement/paginate';

const url = DOMAIN + path;

function getNoticeList (data) {
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

export default getNoticeList;

