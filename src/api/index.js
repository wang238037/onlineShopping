// API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax';
// 三级联动接口/api/product/getBaseCategoryList   GET请求


// home页面的请求
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'GET' })

export const reqGetBannerList = () => mockRequests.get('/banners')

export const reqGetFloorList = () => mockRequests.get('/floors')

// search页面的请求
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// detail页面请求商品详细信息
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品添加到购物车中或者更新某一个产品的数量
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表
export const reqCartList = () => requests({ url: "/cart/cartList", method: "get" })

// 删除购物车某一个产品
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 修改商品选中状态
export const reqUpdatecheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取注册时向手机号发送的验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 用户注册
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data: data, method: 'post' })

// 用户登录
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data: data, method: 'post' })

// 获取用户信息，需要用户带着token向服务器要用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出登录
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取商品清单
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data: data, method: 'post' })

// 获取订单支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 查询订单支付状态
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

// 获取我的订单数据
export const reqOrderList  = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })