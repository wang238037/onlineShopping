<template>
    <div>
        <!-- 三级联动全局组件 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <ProductionRank></ProductionRank>
        <LikeProduction></LikeProduction>
        <FloorProduction v-for="item in floorList" :key="item.id" :msg="item"></FloorProduction>
        <BrandList></BrandList>
    </div>
</template>
<script>
import ListContainer from './ListContainer.vue';
import TodayRecommend from './TodayRecommend.vue';
import ProductionRank from './ProductionRank.vue';
import LikeProduction from './LikeProduction.vue';
import FloorProduction from './FloorProduction.vue';
import BrandList from './BrandList.vue';

import { mapState } from 'vuex';

export default {
    name: 'MyHome',
    computed: {
        ...mapState({
            floorList: state => state.home.floorList
        })
    },
    components: {
        ListContainer,
        TodayRecommend,
        ProductionRank,
        LikeProduction,
        FloorProduction,
        BrandList
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    mounted() {
    }
}
</script>
<style scoped lang="scss"></style>