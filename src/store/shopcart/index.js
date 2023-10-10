import { reqCartList, reqDeleteCartById, reqUpdatecheckedById } from '@/api/index'

const state = {
    cartList: []
}

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}

const actions = {
    async getCartList(context) {
        let result = await reqCartList()
        if (result.code == 200) {
            context.commit('GETCARTLIST', result.data)
        }
    },
    async deleteCartById(context, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    async updatecheckedById(context, { skuId, isChecked }) {
        let result = await reqUpdatecheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllCheckedCart(context) {
        let promistList = []
        context.getters.cartList.cartInfoList.forEach(item => {
            if (item.isChecked) {
                let promise = context.dispatch('deleteCartById', item.skuId)
                promistList.push(promise)
            }

        })
        return Promise.all(promistList)
    },
    updateAllCartIsChecked(context, isChecked) {
        let promistList = []
        context.getters.cartList.cartInfoList.forEach(item => {
            let promise = context.dispatch('updatecheckedById', { skuId: item.skuId, isChecked: isChecked })
            promistList.push(promise)

        })
        return Promise.all(promistList)
    }

}

const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}