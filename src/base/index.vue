<template>
  <div class="index">
    <i-header></i-header>
    <div class="index-content">
        <keep-alive>
          <investment v-if="index==0"></investment>
        </keep-alive>
        <keep-alive>
          <exchange v-if="index==1"></exchange>
        </keep-alive>
        <keep-alive>
          <news v-if="index==3"></news>
        </keep-alive>
        <keep-alive>
          <more v-if="index==4"></more>
        </keep-alive>
    </div>

    <!-- <router-link to="/test">微软雅黑</router-link>  -->
    <i-footer @indexNode="showChildNode"></i-footer>
  </div>
</template>

<script>
import iFooter from '@/components/i-footer'
import { pageHeight } from "@/common/js/common.js"
import iHeader from '@/components/i-header'
//投资组合
import investment from '@/base/investment'
//汇率
import exchange from '@/base/exchange'
//订阅源
import news from '@/base/news'
//更多
import more from '@/base/more'
export default {
  name: 'index',
  components:{
    iFooter,
    pageHeight,
    iHeader,
    investment,
    exchange,
    news,
    more
  },
  data(){
    return{
      index:1
    }
  },
  mounted(){
    pageHeight('.index')
  },
  methods:{
    showChildNode(data){
      this.index = data
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .index{
    position: relative;
  }
  .index-content{
    padding:3rem 0 4rem 0;
  }
</style>
