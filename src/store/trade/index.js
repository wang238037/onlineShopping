import { reqAddressInfo, reqOrderInfo } from '@/api/index'

const state = {
    address: [
        {
            id: 1361,
            fullAddress: '北京北京市朝阳区远洋天地5号楼15',
            userAddress: '北京市朝阳区远洋天地5号楼15',
            userId: 2,
            provinceId: 1,
            consignee: '张龙',
            isDefault: '0',
            phoneNum: '15852016643',
            regionId: 1,
        }, {
            id: 1363,
            userAddress: '北京市北七家镇',
            fullAddress: '北京北京市北七家镇',
            userId: 2,
            provinceId: 1,
            consignee: '张三',
            isDefault: '1',
            phoneNum: '14725836956',
        }, {
            id: 1364,
            userAddress: '武汉市江夏区东湖网谷',
            fullAddress: '湖北省武汉市江夏区东湖网谷',
            userId: 2,
            provinceId: 24,
            consignee: '李四',
            isDefault: '0',
            phoneNum: '12345678910',
        }, {
            id: 1365,
            userAddress: '深圳市宝安区',
            fullAddress: '广东省深圳市宝安区',
            userId: 2,
            provinceId: 26,
            consignee: '王五',
            isDefault: '0',
            phoneNum: '36925814745',
        }
    ],
    orderInfo: {}
}

const mutations = {
    // eslint-disable-next-line no-unused-vars
    GETADDRESSINFO(state, address) {
        // state.address = address
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    }
}

const actions = {
    async getAddressInfo(context) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            context.commit('GETADDRESSINFO', result.data)
        }
    },
    async getOrderInfo(context) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            context.commit('GETORDERINFO', result.data)
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