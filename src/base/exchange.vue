<template>
  <div class="exchange">
      <!-- <loading></loading> -->
      <ul class="productTeam">
        <li v-for="(item,index) in proList" :key="index" class="clearfix" @click="getClickChild(item.state,index)">
          <div class="tit">
            <h3 v-text="item.type"></h3>
            <span :class="[item.index=='0'? 'red': 'green']" v-text="item.range"></span>
          </div>
          <div class="fellLbox">
            <div :class="[item.state == false? 'call' : 'cell' ]" @click="ccc">
              <h4>买入</h4>
              <span v-text="item.sale"></span>
            </div>

            <i v-text="item.difference"></i>

            <div :class="[item.state == false? 'call' : 'cell' ]">
              <h4>卖出</h4>
              <span v-text="item.buy"></span>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  components:{
    loading
  },
  name:"exchange",
  data(){
    return{
      proList:[
        {
          type:'AUD/USD',
          range:'0.25%',
          sale:'0.78625',
          buy:'0.78641',
          difference:'1.6',
          state:false,
          index:"0"
        },
        {
          type:'EUR/GBP',
          range:'-0.8%',
          sale:'0.88952',
          buy:'0.88913',
          difference:'1.9',
          state:false,
          index:"1"
        }
      ],
      index:'',
    }
  },

  methods:{
    getClickChild(state,index){
      if(this.index == index){
        this.proList[index].state = !this.proList[index].state
      }
      else{
        this.index = index;
        for(let i = 0; i<this.proList.length; i++){
          this.proList[i].state = false;
        }
        this.proList[index].state = true
      }
    },
    ccc(){
      this.index = ''
    }
  }
}
</script>
<style lang="less" scoped>
  .productTeam{
    width:100%;
    li{
      position: relative;
      padding:0.8rem 1rem 0.8rem 11rem;
      display: flex;
      .tit{
        position: absolute;
        width:10rem;
        top:50%;
        margin-top:-1.5rem;
        left:1rem;
        line-height: 1.5rem;
        height:3rem;
        h3{
          height:1.2rem;
          font-size:1.2rem;
          color:#fff;
        }
        span.red{
          color:red;
        }
        span.green{
          color:green;
        }
      }
      .fellLbox{
        position: relative;
        flex: 1;
        text-align: center;
        z-index: 66;
        .call{
           transition:all 0.3s;
           display:inline-block;
           height:3rem;
           line-height: 3rem;
           padding:0 1.5rem;
           background: none;
           h4{
             display:none;
             transition:all 0.3s;
             opacity: 0;
           }
          span{
            color:#fff;
            display: block;
          }
        }
        .cell{
          transition:all 0.3s;
          display:inline-block;
          height:3rem;
          padding:0.5rem 1.5rem;
          background: #2075c3;
          border-radius: 0.3rem;
          h4{
            display:inline;
            transition:all 0.3s;
            opacity: 1;
            color:#fff;
          }
          span{
            
            display:block;
            color:#fff;
          }
        }

        i{
          color:#fff;
          background: rgb(0, 27, 63);
          padding:0.1rem 0.3rem;
          margin:0 0.5rem;
        }

      }


    }
    li:nth-of-type(odd){
      background: #000;
    }
    li:nth-of-type(even){
      background: rgb(0, 18, 34);
    }
    
  }
</style>
