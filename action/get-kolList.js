import {DOMAIN} from '../config/config.js';

const path = '/netred/paginate';

const url = DOMAIN + path;

function getKolList () {
    return new Promise(function (resolve, reject) {
        wx.request({
            url,
            data,
            success (res) {
                resolve(res)
            },
            fail () {
                
                reject();
            }
        });
    });
}

export default getKolList;

