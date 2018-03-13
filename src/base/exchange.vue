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
            <div :class="[item.state == false? 'call' : 'cell' ]" @click="getDeal">
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
      <div class="PopupBox">
          <div class="PopupClick">
            <i @click="show = !show"></i>
            <div class="line"></div>
          </div>

          <transition name="popup">
            <div v-if="show" class="graph">

              <div class="detail">
                <div class="trigger" @click="smallDetail = !smallDetail" >EUR/JPY<img :class="[this.smallDetail == false? 'reg180':'reg0']" src="../common/image/top.png" /></div>

                <div :class="[this.smallDetail==false? 'detCbox0' : 'detCbox1']">
                  <div class="son">
                      <span>买入</span>
                      <p>111</p>
                  </div>
                  <i>1.6</i>
                  <div class="son">
                      <span>卖出</span>
                      <p>222</p>
                  </div>
                </div>
              </div>

              <div class="checkBox">
                <checker v-model="check" radio-required  default-item-class="check-item" selected-item-class="check-item-selected">
                  <checker-item value="1" @on-item-click="getCheck">时分</checker-item>
                  <checker-item value="2" @on-item-click="getCheck">1m</checker-item>
                  <checker-item value="3" @on-item-click="getCheck">15m</checker-item>
                  <checker-item value="4" @on-item-click="getCheck">1h</checker-item>
                  <checker-item value="5" @on-item-click="getCheck">日k</checker-item>
                </checker>
              </div>

              <charts></charts>
            </div>
          </transition>
      </div>
  </div>
</template>

<script>
import { Checker,CheckerItem } from 'vux'
import loading from '@/components/loading'
import charts from '../base/test'
export default {
  components:{
    loading,
    charts,
    Checker,
    CheckerItem
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
      show:false,
      check:'1',
      smallDetail:false
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
    getDeal(){
      this.index = ''
    },
    getCheck(itemValue,itemDisabled){
      console.log(itemValue)
      console.log(itemDisabled)
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
  .PopupBox{
    position: fixed;
    bottom:3.5rem;
    left: 0;
    width:100%;
    .PopupClick{
      i{
        display: block;
        width:10rem;
        height:2rem;
        margin:0 auto;
        border-radius: 0.5rem 0.5rem 0 0;
        background: url('../common/image/Kicon.png') no-repeat center,#4c4c4c;
        background-size:1.8rem auto;
      }
      .line{
        width:100%;
        height:1.5rem;
        background: #4c4c4c;
      }
    }
    .graph{
      position: relative;
      height:25rem;
      .detail{
        position: absolute;
        width:12rem;
        top:3rem;
        left: 1rem;
        z-index: 10;
        .trigger{
          width:100%;
          line-height:1.5rem;
          background: #2075c3;
          color:#fff;
          text-indent: 1rem;
          img{
            margin-left: 5rem;
            width:1rem;
            height:1rem;
            vertical-align:initial;
            transition: all 0.3s
          }
          .reg180{
            transform: rotate(180deg)
          }
          .reg0{
            transform: rotate(0deg)
          }
        }
        div[class^='detCbox']{
          background: rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
          display: flex;
          i{
            display:block;
            position: absolute;
            bottom: 0;
            width:2rem;
            text-align: center;
            left: 50%;
            margin-left:-1rem;
            border:1px solid #03213d;
            color:#fff;
            height:1.2rem;
            line-height: 1.2rem;
          }
          .son{
            flex:1;
            padding:0.5rem 1rem;
            border:1px solid #03213d;
            span{
              font-size:12px;
              color:#2075c3;
            }
            p{
              color:#fff;
              margin-top:0.5rem;
              font-size:1.2rem;
            }
          }
        }
        div.detCbox0{
          transition: all .3s;
          height:0
        }
        div.detCbox1{
          transition: all .3s;
          height:5rem;
        }
      }
      .checkBox{
        height:3rem;
        text-align: center;
        .vux-checker-box{
          width:100%;
          display: flex;
          padding-top:0.5rem;
          .check-item {
            flex: 1;
            margin: 0 0.25rem;
            // display: inline-block;
            border: 2px solid #888;
            color:#888;
            height:1.5rem;
            text-align: center;
            border-radius: 0.75rem;
          }
          .check-item-selected {
            border: 2px solid #2075c3;
            color:#fff;
          }
        }
      }
    }
  }

  .popup-enter-active{
    animation: popup-down 0.3s
  }

  .popup-leave-active{
    animation: popup-down 0.3s reverse;
  }

  @keyframes popup-down{
    0%  {
        height:0;
    }
    80%{
      height:27rem
    }
    100% {
        height:25rem;
    }
  }

</style>
