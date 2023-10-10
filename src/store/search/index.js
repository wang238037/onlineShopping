import { reqGetSearchInfo } from '@/api/index'

const state = {
    searchInfo: {},
}

const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}

const actions = {
    async getSearchList(context, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            context.commit('GETSEARCHINFO', result.data)
        }
    }
}

const getters = {
    goodsList(state) {
        // 假如网络不好，会返回undefined，所以计算的数据至少要是个空数组
        return state.searchInfo.goodsList || []
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || []
    },
    attrsList(state) {
        return state.searchInfo.attrsList || []
    },
    paginationTotal(state) {
        return state.searchInfo.total || undefined
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}