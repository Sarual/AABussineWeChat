import wepy from 'wepy'
import {
  service
} from '../assets/interface/interface.js'


export default class baseMixin extends wepy.mixin {
  /**
   * [公共方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  noop() {
    return null;
  }
  hasOwn(obj, type) {
    return Object.prototype.hasOwnProperty.call(obj, type);
  }

  /**
   * [isXXX 基础方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isUndefined(item) {
    return typeof item === 'undefined';
  }
  isDefined(item) {
    return !this.isUndefined(item);
  }
  isString(item) {
    return typeof item === 'string';
  }
  isNumber(item) {
    return typeof item === 'number';
  }
  isArray(item) {
    return Object.prototype.toString.apply(item) === '[object Array]';
  }
  isObject(item) {
    return typeof item === 'object' && !this.isArray(item);
  }
  isFunction(item) {
    return typeof item === 'function';
  }

  /**
   * [getXXX 增强方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  getString(item, defaultStr) {
    if (this.isString(item)) return item.trim();
    if (this.isNumber(item)) return `${item}`.trim();
    return defaultStr || '';
  }
  getNumber(item, defaultNum) {
    var matches = this.getString(item).match(/\d+/);
    return this.isNumber(matches && +matches[0]) ? +matches[0] : defaultNum;
  }
  getArray(item, defaultArr) {
    return this.isArray(item) ? item : (defaultArr || []);
  }
  getObject(item, defaultObj) {
    return this.isObject(item) ? item : (defaultObj || {});
  }
  getFunction(item) {
    return this.isFunction(item) ? item : noop;
  }

  /**
   * [JSON方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  $json(item) {
    let str = {
      type: Object.prototype.toString.call(item)
    }
    try {
      str = JSON.stringify(item)
    } catch (e) {
      str.error = e && e.stack || ''
    }
    return this.isString(str) ? str : this.$json(str)
  }
  $parse(item) {
    let obj = {
      type: Object.prototype.toString.call(item)
    }
    try {
      obj = JSON.parse(item)
    } catch (e) {
      obj.error = e && e.stack || ''
    }
    return this.isObject(obj) ? obj : this.$parse(obj)
  }

  /**
   * [功能方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  isPhone(str) {
    return /^1\d{10}$/.test(str)
  }

  // 警告框
  $alert(item = '标题', item2) {
    const param = this.isObject(item) ? Object.assign({
      // 首参数为obj
      title: 'title',
      content: 'content'
    }, item) : this.isString(item) ? this.isString(item2) ? {
      // 俩参数均为字符串
      title: item,
      content: item2
    } : {
      // 只有首参为字符串
      title: '',
      content: item
    } : {
      // 尝试转换字符串
      title: item.toString ? item.toString() : '参数异常'
    }
    wx.showModal(Object.assign({
      showCancel: false,
      confirmColor: '#C7002D', //确定文字的颜色
    }, param))
  }

  //跳转链接
  $goto(url) {
    wx.navigateTo({
      url: url
    })
  }

  $gotoSwitch(url) {
    wx.switchTab({
      url: url
    })
  }

  // 随机色
  $getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  }
  // 获取用户信息
  $getUserId() {
    return service.isFormal ? wepy.getStorageSync('userId') : wepy.getStorageSync('userIdInfo')
  }
  // 获取年月日
  getNYR(value) {
    let dateArr = value.split('-')
    return dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日'
  }
  // 获取年月
  getNY(value) {
    let dateArr = value.split('-')
    return dateArr[0] + '年' + dateArr[1] + '月'
  }
  // 获取星期几
  getWeek(value) {
    let a = new Array('日', '一', '二', '三', '四', '五', '六')
    let week = new Date(value).getDay()
    return '星期' + a[week]
  }
  // 获取年月日 星期几
  getDateFormat(value) {
    let dateArr = this.getNYR(value)
    let dateWeek = this.getWeek(value)
    return dateArr + ' ' + dateWeek
  }
  $loadFontFace(fontName, fontUrl) {
    wepy.loadFontFace({
      family: fontName,
      source: `url(${fontUrl})`,
      success(res) {
        console.log('字体加载成功!')
      },
      fail: function (res) {},
      complete: function (res) {}
    })
  }
  // 适用于1～99层
  getFloor(numStrArr) {
    var newStrArr = new Array(100)
    for (var i = 0; i < numStrArr.length; i++) {
      var temp = numStrArr[i]
      var arr = ['十', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      var num = Number(temp)
      var str = ''
      if (num < 10) {
        str += arr[num]
      } else if (num === 10) {
        str = arr[0]
      } else {
        if (temp[0] === '1') {
          str = arr[0] + arr[temp[1]]
        } else if (temp[1] === '0') {
          str = arr[temp[0]] + arr[0]
        } else if (temp[0] > 1) {
          str = arr[temp[0]] + arr[0] + arr[temp[1]]
        }
      }
      str = '第' + str + '层'
      newStrArr[num] = str
    }
    return newStrArr
  }
  // 时间差
  getDiffDate(targetDate) {
    let date1 = new Date(targetDate)
    let date2 = new Date()
    date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
    date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
    const diff = date2.getTime() - date1.getTime()
    const diffDate = diff / (24 * 60 * 60 * 1000)
    return diffDate
  }
}
