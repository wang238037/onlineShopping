<template>
  <div id="app">
    <HeaderIndex></HeaderIndex>
    <router-view></router-view>
    <FooterIndex v-show="this.$route.meta.isFooterShow"></FooterIndex>
  </div>
</template>

<script>
import HeaderIndex from './components/Header/HeaderIndex.vue';
import FooterIndex from './components/Footer/FooterIndex.vue'
export default{
  components:{
    HeaderIndex,
    FooterIndex
  },
  mounted(){
    this.$store.dispatch("getCategoryList")
    this.$store.dispatch('getBannersList')
    this.$store.dispatch('getFloorList')
    
  }
}
</script>

<style lang="scss">
</style>
