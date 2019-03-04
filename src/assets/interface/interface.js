/* ========================================================
                        AA连锁酒店助手小程序接口配置
======================================================== */
// 环境
var isFormal = true
// 域名
var host = isFormal ? 'https://aaroomtest.bjlrsd.com' : 'http://172.31.29.11:8080'
// 'https://aaroomtest.bjlrsd.com'
// 'https://test.aaconnections.cn'
// 'http://172.31.29.11:8080'
// 'htttp://172.31.204.2:8080'
// 'http://172.31.29.255:8080'
// 'http://localhost:8080'
// 'http://172.31.29.10:8080'
export const service = {
  isFormal: isFormal,
  // 用户首次登录
  login: `${host}/login`,
  // 小程序自动登陆
  autoLogin: `${host}/autoLogin`,
  // 单日盈利报表(商家端)
  getRunData: `${host}/wx/console/api/getDayReportListByEmpId`,
  // 入住率
  monthRoomData: `${host}/wx/console/api/getDayReportListByRoom`,
  // 获得所有房态
  getRoomStatusList: `${host}/wx/console/api/getRoomStatusByShopID`,
  // 获得所有房型
  getRoomTypeList: `${host}/wx/console/api/getRoomTypeByShopID`,
  // 条件查询房态、房型数据
  getRoomList: `${host}/wx/console/api/getRoomListByShopID`,
  // 查询所有订单
  getOrderStatusList: `${host}/wx/console/api/getAllOrderStatusList`,
  // 条件查询订单
  getOrderList: `${host}/wx/console/api/getAllOrderList`,
  // 获取所有门店
  getAllShopIds: `${host}/wx/console/api/loginByShopId`,
  // // 退出登陆
  // logout: `${host}/logout`,
  //  ----------------------------------------------------------------测试
  // 单日盈利报表(商家端)
  // getRunData: `${host}/getDayReportListByEmpId`,
  // // 入住率
  // monthRoomData: `${host}/getDayReportListByRoom`,
  // // 获得所有房态
  // getRoomStatusList: `${host}/getRoomStatusByShopID`,
  // // 获得所有房型
  // getRoomTypeList: `${host}/getRoomTypeByShopID`,
  // // 获取所有酒店IDs
  // getAllShopIds: `${host}/loginByShopId`,
  // // 条件查询房态、房型数据
  // getRoomList: `${host}/getRoomListByShopID`,
  // // 查询所有订单
  // getOrderStatusList: `${host}/getAllOrderStatusList`,
  // // 条件查询订单
  // getOrderList: `${host}/getAllOrderList`,
  // // 获取所有门店
  // getAllShopIds: `${host}/loginByShopId`,
  // -----------------------------------------------------------------测试
  // 主域
  host
}
export default {
  service
}
