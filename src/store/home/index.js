import { reqCategoryList,reqGetBannerList,reqGetFloorList } from '@/api/index'

const state = {
    categorylist:[],
    bannersList:[],
    floorList:[]
}

const mutations = {
    CATEGORYLIST(state,categorylist){
        state.categorylist=categorylist
    },
    GETBANNERSLIST(state,bannersList){
        state.bannersList=bannersList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}

const actions = {
    async getCategoryList(context){
        let result = await reqCategoryList();
        if(result.code==200){
            result.data.pop()
            context.commit("CATEGORYLIST",result.data)
        }
    },

    // 获取首页轮播图数据
    async getBannersList(context){
        let result = await reqGetBannerList()
        if(result.code==200){
            context.commit("GETBANNERSLIST",result.data)
        }
    },

    async getFloorList(context){
        let result = await reqGetFloorList()
        if(result.code==200){
            context.commit("GETFLOORLIST",result.data)
        }
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}