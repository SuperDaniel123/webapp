<template>
  <div class="i-header">
        <div class="userIcon" @click="show_left = !show_left">
            <span class="vip">v20</span>
        </div>
        <div class="titlela clearfix" @click="dropDown = !dropDown">Primary(USD) 
            <span class="fund" v-if="titleValue"><i class="cur">US$</i>99,999.97</span>
            <div :class="[dropDown ? 'iconArr s0' : 'iconArr s180']">
                <img src="@/common/image/top.png" />
            </div>
        </div>
        <!--下拉菜单-->
        <transition name="drop-down">
            <div class="sheet" v-show="dropDown">
                <div class="c-line clearfix"><span>资产净值</span><i>99,999.97</i></div>
                <div class="c-line clearfix"><span>未兑现盈亏</span><i>0.00</i></div>
                <div class="c-line clearfix"><span>余额</span><i>99,999.97</i></div>
                <div class="c-line clearfix"><span>已兑现盈亏</span><i>-0.03</i></div>
                <div class="c-line clearfix"><span>头寸价值</span><i>1.00</i></div>
                <div class="c-line clearfix"><span>交易</span><i>1</i></div>
                <div class="c-line clearfix"><span>订单</span><i>0</i></div>
                <div class="statistics clearfix">
                    <div class="circle-box">
                        <x-circle :percent="percent2" :stroke-width="7" :trail-width="3" :stroke-color="strokeColor" trail-color="#ececec" >
                            <span style="color: #fff">{{percent2}}%</span>
                        </x-circle>
                    </div>
                    <div class="text">
                        <div class="c-line clearfix"><span>可用保证金</span><i>99,999.91</i></div>
                        <div class="c-line clearfix"><span>已用保证金</span><i>0.06</i></div>
                    </div>
                </div>
                <div class="c-line clearfix"><span>显示NAV</span><i><x-switch title="" v-model="titleValue" ></x-switch></i></div>
                
            </div>
            
        </transition>
        <!--左边菜单-->
        <transition name="slide-left">
            <div class="userDet" v-show="show_left">
                <div class="detBg" @click="show_left = !show_left"></div>
                <div class="det-content">
                    <div class="icon-close" @click="show_left = false"></div>
                    <div class="logo">fxTrade Practice</div>
                    <div class="userName"><span>jianjiang</span></div>
                    <div class="e-line clearfix"><span>余额</span><span class="pay">100,000,00</span></div>
                    <div class="e-line clearfix"><span>资产净值</span><span class="pay">99,999.97</span></div>
                    <!--统计图-->
                    <div class="statistics clearfix">
                        <div class="circle-box">
                            <x-circle :percent="percent2" :stroke-width="7" :trail-width="3" :stroke-color="strokeColor2" trail-color="#ececec">
                                <span :style="{color: strokeColor2}">{{percent2}}%</span>
                            </x-circle>
                        </div>
                        <div class="text">
                            <div class="e-line clearfix"><span>可用保证金</span><span class="pay">99,999.91</span></div>
                            <div class="e-line clearfix"><span>已用保证金</span><span class="pay">0.06</span></div>
                        </div>
                    </div>
                    <div class="kick">入金</div>
                    <div class="logOut">登出</div>
                </div>
            </div>
        </transition>

        

  </div>
</template>

<script>
import { pageHeight } from "@/common/js/common.js"
import { XCircle,XSwitch } from 'vux'
export default {
  name:'i-header',
  components:{
        pageHeight,
        XCircle,
        XSwitch
  },
  mounted(){
      pageHeight('.userDet')
      pageHeight('.detBg')
      pageHeight('.det-content')
  },
  data(){
      return{
        show_left:false,
        percent2: 30.66,
        strokeColor:'#0d385f',
        strokeColor2: 'rgb(32,117,195)',
        dropDown:false,
        titleValue:true
      }
  }
  
}
</script>

<style lang="less" scoped>
    .i-header{
        position:fixed;
        width:100%;      
        height:3rem;
        background:rgb(32,117,195);
        z-index: 8
    }
    .userIcon{
        width:3rem;
        height:3rem;
        padding-left: 1rem;
        position: relative;
        z-index: 99;
        background: url('../common/image/user.png') no-repeat center center;
        background-size:2rem auto;
        .vip{
            display: inline-block;
            height:1rem;
            padding:0 0.2rem;
            font-size:1rem;
            line-height: 0.9rem;
            background: orange;
            color:#fff;
            border-radius:1rem;
            position: absolute;
            bottom:0.3rem;
            right:0.5rem;
        }
    }
    .userDet{
        width:100%;
        position: fixed;
        top:0;
        left: 0;
        .detBg{
            display: block;
            width:100%;
        }
        z-index: 999;
    }
    .det-content{
        position: absolute;
        top:0;
        left: 0;
        width:85%;
        padding-top:3rem;
        box-sizing: border-box;
        background: rgb(17,17,17);
        .icon-close{
            width:2rem;
            height:2rem;
            background: url('../common/image/close.png') no-repeat center;
            position: absolute;
            top:3rem;
            right:1rem;
        }
        .logo{
            color:#fff;
            font-size:1.5rem;
            text-indent: 1rem;
        }
        .userName{
            color:rgb(32,117,195);
            padding:1rem;
            border-bottom:1px solid #0d385f;
            span{
                font-size:1.2rem;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
            }

        }
        .e-line{
            color:#888;
            width:100%;
            height:1.5rem;
            padding:0 1.5rem;
            margin:0.5rem auto;
            box-sizing:border-box;
            .pay{
                float: right;
            }
        }

        .statistics{
            padding:1rem 0 1rem 1rem;
            .circle-box{
                width:20%;
                height:auto;
                float: left;
            }
            .text{
                float: left;
                width:80%
            }

        }
        .kick{
            text-align: center;
            padding:1rem;
            line-height: 1rem;
            border: solid 1px #0d385f;
            color:#fff;
            border-left: none;
            border-right:none;
        }
        .logOut{
            text-align: center;
            padding:1rem;
            line-height: 1rem;
            border-top: solid 1px #0d385f;
            color:#fff;
            position: absolute;
            bottom:0;
            left: 0;
            width:100%;
            box-sizing: border-box;
        }
    }

    .titlela{
        position: absolute;
        top:0;
        z-index: 98;
        left:0;
        line-height: 3rem;
        padding:0 1rem 0 5rem;
        box-sizing: border-box;
        color:#fff;
        font-size:1.2rem;
        background:rgb(32,117,195);
        width:100%;
        .fund{
            padding-left: 3rem;
            .cur{
                padding-right:0.5rem;
            }
        }
        .iconArr{
            float: right;
        }
        .s180 {
            transition:All 0.4s ease-in-out; 
            transform:rotate(180deg);
            transform-origin:50% 50%; 
        }
        .s0 {
            transition:All 0.4s ease-in-out; 
            transform:rotate(0deg);
            transform-origin:50% 50%; 
        }
    }
    .sheet{
        width:100%;
        padding:1rem 0;
        background: rgb(32,117,195);
        position: fixed;
        top:3rem;
        left: 0;
        .c-line{
            color:#fff;
            font-size:1rem;
            line-height: 2rem;
            padding:0 2rem;
            box-sizing: border-box;
            i{
                float: right;
            }

        }
        .statistics{
            padding:1rem 0 1rem 2rem;
            .circle-box{
                width:16%;
                height:auto;
                float: left;
            }
            .text{
                float: left;
                width:80%
            }

        }
    }
    .vux-x-switch.weui-cell_switch{
        padding:0;
    }
    .weui-switch, .weui-switch-cp__box{
        width:4rem;
        height:1.625rem;
    }



    //左侧动画
    .slide-left-enter-active {
        animation: slide-left-fade .5s;
    }
    .slide-left-leave-active {
        animation: slide-left-fade .3s reverse;
    }

    @keyframes slide-left-fade {
        from  {
            left:-100%; 
            top:0;
        }
        to {
            left:0; 
            top:0;
        }
    }

    //下拉动画
    .drop-down-enter-active{
        animation:drop-down .3s
    }

    .drop-down-leave-active{
        animation:drop-down .3s reverse;
    }
    @keyframes drop-down {
        from  {
            top:0rem;
            left:0; 
            opacity: 0;
            
        }
        to {
            top:3rem;
            left:0; 
            opacity: 1;
            
        }
    }
</style>


