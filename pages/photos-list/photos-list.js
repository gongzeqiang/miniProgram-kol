Page({
    data: {
        aPic: [{
            id:0,
            name:'aaa',
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509901413464&di=944fdc8ea45d1104e3876888de23e2e5&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F121014%2F240425-12101420050650.jpg'
        },{
            id:1,
            name:'bbb',
            src:'http://img5.imgtn.bdimg.com/it/u=611941505,1210798722&fm=27&gp=0.jpg'
        },{
            id:2,
            name:'ccc',
            src:'https://file.qiaoli.org/xqfile1/M00/12/6C/ooYBAFn5mMCAefZ0AATpdQoI4Xo81.jpeg'
        },{
            id:3,
            name:'ddd',
            src:'https://file.qiaoli.org/xqfile1/M00/13/3E/o4YBAFoOkD6AZIcNAAPjgeNO6k401.jpeg'
        }]
    },
    delpic (e){
        var index=e.currentTarget.dataset.id;
        var aPic=this.data.aPic;
        var that=this;
        var delIndex;
        aPic.forEach((el,i) => {
            if(el.id == index){
                delIndex=i;
            }
        });
        wx.showModal({
            title: '删除',
            content: '是否要删除名称为 '+aPic[delIndex].name+' 的相片？',
            success: function(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                    
                    aPic.splice(delIndex,1);
                    that.setData({
                        aPic
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    toBigPic (e) {
        var id=e.currentTarget.dataset.id;
        var urls=[];
        var curIndex;
        this.data.aPic.forEach((el,i)=>{
            urls.push(el.src);
            if(el.id == id){
                curIndex=i;
            }
        });
        wx.previewImage({
            current: this.data.aPic[curIndex].src,
            urls
        })
    },
    choosePic () {
        var aPic=this.data.aPic;
        var that=this;
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              var tempFilePaths = res.tempFilePaths;
              
              aPic.push({
                  id:aPic.length*3+1,
                  name:'ds'+(Math.random()*100).toFixed(2),
                  src:tempFilePaths
              });
              that.setData({
                aPic
              });
            }
        })
    }
})