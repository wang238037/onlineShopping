import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/mock/mockServe'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'
import loading from './assets/images/loading.jpg'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

// 三级联动全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
import 'swiper/css/swiper.css';
Vue.config.productionTip = false

Vue.use(VeeValidate)
// 表单验证
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`           // 修改内置规则的message，让确认密码和密码相同
  },
  attributes: {     // 给校验的field属性名映射中文名称
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    isCheck: '协议',
    agree: '协议'

  }
}),
  // 自定义验证规则
  VeeValidate.Validator.extend('myagree', {
    validate: value => value,
    getMessage: field => field + '必须同意'
  })

Vue.use(ElementUI);

Vue.use(VueLazyload, {
  loading: loading,
  preLoad: 1.3,
  attempt: 1
})



new Vue({
  router,
  store,
  render: h => h(App),
  // 配置全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
