import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api/index'

const state = {
    // 验证码
    code: '',
    token: '',
    userInfo: {}
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, data) {
        state.token = data.token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.userInfo = {}
        state.token = ''
        localStorage.removeItem('TOKEN')
    }
}

const actions = {
    // 获取验证码
    async getCode(context, phone) {
        let result = await reqGetCode(phone)
        console.log("result:", result)
        if (result.code == 200) {
            context.commit('GETCODE', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },

    // 注册用户
    async reqUserRegister(context, user) {
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    // 用户登录
    async reqUserLogin(context, user) {
        let result = await reqUserLogin(user)
        if (result.code == 200) {
            context.commit('USERLOGIN', result.data)
            localStorage.setItem("TOKEN", result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息
    async getUserInfo(context) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            context.commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogout(context) {
        let result = await reqLogout()
        if (result.code == 200) {
            context.commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}