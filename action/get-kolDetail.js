import {DOMAIN} from '../config/config.js';

const path = '/netred/detail';

const url = DOMAIN + path;

function getKolDetail (data) {
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

export default getKolDetail;

