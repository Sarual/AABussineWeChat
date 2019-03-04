import { handleActions } from 'redux-actions'
import { CACHE_USER_INFO_DATA, CACHE_TABBAR_BOTTOM_DATA, CACHE_START_SM_MASK } from '../types/cache'

export default handleActions({
  [CACHE_USER_INFO_DATA] (state, action) {
    return {
      ...state,
      userInfoCacheData: action.payload
    }
  },
  [CACHE_TABBAR_BOTTOM_DATA] (state, action) {
    return {
      ...state,
      tabBarBottomCacheData: action.payload
    }
  },
  [CACHE_START_SM_MASK] (state, action) {
    return {
      ...state,
      startSMmaskCacheData: action.payload
    }
  }
}, {
  userInfoCacheData: {
    userName: 'hahah',
    // role: 'user',
    // roleId:wepy.getStorageSync('roleId'),
    role: 'business'
  },
  tabBarBottomCacheData: {
    user: [
      {
        index: 0,
        name: '推广首页',
        img: '../assets/images/tabBarBottom/tabBom0.png',
        bar: '../assets/images/tabBarBottom/tabBom0_bar.png',
        routerLink: 'Bhome',
        isSelected: true
      },
      {
        index: 1,
        name: '推广',
        img: '../assets/images/tabBarBottom/tabBom1.png',
        bar: '../assets/images/tabBarBottom/tabBom1_bar.png',
        routerLink: 'Bpromotion',
        isSelected: false
      },
      {
        index: 2,
        name: '我的',
        img: '../assets/images/tabBarBottom/tabBom2.png',
        bar: '../assets/images/tabBarBottom/tabBom2_bar.png',
        routerLink: 'BpersonalCenter',
        isSelected: false
      }
    ],
    business: [
      {
        index: 0,
        name: '经营情况',
        img: '../assets/images/tabBarBottom/tabBom0.png',
        bar: '../assets/images/tabBarBottom/tabBom0_bar.png',
        routerLink: 'ArunState',
        isSelected: true
      },
      {
        index: 1,
        name: '房态',
        img: '../assets/images/tabBarBottom/tabBom1.png',
        bar: '../assets/images/tabBarBottom/tabBom1_bar.png',
        routerLink: 'AroomState',
        isSelected: false
      },
      {
        index: 2,
        name: '订单',
        img: '../assets/images/tabBarBottom/tabBom2.png',
        bar: '../assets/images/tabBarBottom/tabBom2_bar.png',
        routerLink: 'AorderList',
        isSelected: false
      },
      {
        index: 3,
        name: '共享会员',
        img: '../assets/images/tabBarBottom/tabBom3.png',
        bar: '../assets/images/tabBarBottom/tabBom3_bar.png',
        routerLink: 'AshareMember',
        isSelected: false
      }
    ]
  },
  startSMmaskCacheData: true
})
