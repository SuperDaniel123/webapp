<template>
  <div>
      <ul class="dealList">
        <li v-for="(item,index) in dealList" :key="index" :class="[item.state ? '' : 'bgclass']" @click="item.state = !item.state">
            <h3 class="title clearfix">{{item.proName}} {{item.unit}}<span class="red">{{item.range}}</span></h3>
            <div class="detail">
                <p><span style="color:#fff">卖空@ {{item.upper}}</span> &rarr; {{item.floor}}</p>
                <p>止盈:- 止损:- 移动止损:- </p>
                <p>说明单编号 {{item.proNum}}</p>
                <i v-text="item.pal"></i>
            </div>
            <div class="buttonView" >
                <input type="button" name="change" value="更改" />
                <input type="button" name="over" value="结算交易" />
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
      return{
        dealList:[
            {
                proName:'GBP/USD',
                unit:'1单位',
                range:'-0.00',
                upper:'1.37989',
                floor:'1.38052',
                proNum:'13',
                pal:'-6.3',
                state:true
            }
        ]
      }
  }
}
</script>

<style lang="less" scoped>
.dealList{
    margin-top:0.5rem;
    padding:0 0.5rem;
    li{
        height:6rem;
        overflow: hidden;
        transition: all 0.2s;
        padding:0.5rem;
        border-bottom:1px solid #252525;
        .title{
            color:#fff;
            font-size:1.2rem;
            span{
                float: right;
            }
            span.red{
                color:red;
            }
            span.green{
                color:green
            }
        }
        .detail{
            position: relative;
            p{
                line-height: 1.5rem;
            }
            i{
                color:red;
                line-height: 1rem;
                font-size:1rem;
                position:absolute;
                top:50%;
                right:0;
                margin-top:-0.5rem;
            }
        }
        .buttonView{
            margin-top:1rem;
            display: flex;
            input{
                flex: 1;
                width:50%;
                color:#fff;
                line-height: 2rem;
            }
            input[name="change"]{
                background: #999;
            }
            input[name="over"]{
                background: red
            }
        }
    }
    li.bgclass{
        background: #252525;
        transition: all 0.2s;
        height:9rem;
    }
}
</style>

