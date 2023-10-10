import { reqGoodsInfo } from '@/api/index'
import { reqAddOrUpdateShopCart } from '@/api/index'
import { getUUID } from '@/utils/uuid_token'

const state = {
    goodsInfo: {},
    uuid_token: getUUID()
}

const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}

const actions = {
    async getGoodsInfo(context, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            context.commit('GETGOODSINFO', result.data)
        }
    },

    // 加入购物车操作
    async addOrUpdateShopCart(context, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

const getters = {
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}