<template>
  <div class="investment">
      <div class="nav">
            <tab :line-width=2 active-color='#fc378c' v-model="index" :custom-bar-width="getBarWidth" bar-active-color="#2075c3">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{item}}</tab-item>
            </tab>
            <keep-alive>
                <deal-list v-if="index==0"></deal-list>
            </keep-alive>
            <keep-alive>
                <positioned v-if="index==2"></positioned>
            </keep-alive>
            <keep-alive>
                <record v-if="index==3"></record>
            </keep-alive>
      </div>
  </div>
</template>

<script>
import { Tab, TabItem,Swiper, SwiperItem} from 'vux'
import { defaultCipherList } from 'constants';
import dealList from '@/components/invse-view/dealList'
import positioned from '@/components/invse-view/positioned'
import record from '@/components/invse-view/record'
export default {
    
    name:"investment",
    components:{
        Tab, 
        TabItem,
        dealList,
        positioned,
        record
    },
    data(){
        return{
            index:0,
            demo2: '交易',
            list:['交易', '订单', '仓位', '交易记录'],
            getBarWidth:function (index) {
                if(index == 3){
                    return 4 + 'rem'
                }
                return 2 + 'rem'
            }  
        }
    }
}
</script>
<style lang="less" scoped>
    .vux-tab{
        background:rgb(16,31,46);
        .vux-tab-item{
            background: none;
            font-size:1rem;
            color:#fff;
        }
        .vux-tab-item.vux-tab-selected{
            color:#2075c3 !important
        }
    }
    
</style>


