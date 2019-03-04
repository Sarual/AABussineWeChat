import wepy from 'wepy'
import {
  service
} from '../assets/interface/interface.js'
import base from '../mixins/base'
export default class painterMixin extends wepy.mixin {
  mixins = [base]
  data = {
    canvasImg: '',
    banner_url: '../assets/images/shareMember/bgc.png'
  }
  createCanvas() {
    var that = this
    const bannerPromise = new Promise((resolve, reject) => {
      wepy.getImageInfo({
        src: this.banner_url,
        success: (res) => {
          console.log('下载完成')
          let obj = {
            path: res.path
          }
          // console.log('obj', obj)
          resolve(obj)
        }
      })
    })
    const codePromise = new Promise((resolve, reject) => {
      wepy.getImageInfo({
        src: this.banner_url,
        success: (res) => {
          console.log('下载完成')
          // console.log('res-codePromise', res)
          resolve(res.path)
        }
      })
    })
    Promise.all([bannerPromise, codePromise]).then((result) => {
      console.log('painter', result)
      let ctx = wx.createCanvasContext('canvas', this)
      // 绘制底色和背景
      ctx.drawImage('../assets/images/login/shadow.jpeg', 0, 0, 750, 1368)
      // 绘制小程序二维码
      ctx.drawImage('../assets/images/login/AAlsjd.jpg', 25, 130, 300, 300)
      // 标题文字
      ctx.setFillStyle('#333333')
      ctx.setFontSize(14)
      ctx.fillText('邀请您使用AA小程序预', 120, 60)
      ctx.fillText('定房间，房费大减免！', 120, 80)
      // ID文字
      ctx.setFontSize(12)
      ctx.fillText('ID:782733', 50, 500)
      ctx.draw()
    })

    setTimeout(function () {
      wepy.canvasToTempFilePath({
        canvasId: 'canvas',
        success: function (res) {
          // debugger
          // 将生成的图片放入到 <image> 标签里
          that.canvasImg = res.tempFilePath
          console.log(that.canvasImg)
        },
        fail: function (res) {
          console.log(res)
        }
      })
    }, 2000)
  }
}
