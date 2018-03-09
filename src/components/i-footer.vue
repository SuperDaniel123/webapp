<template>
  <div class="i-footer">
    <nav class="footNav">
      <div class="flex" @click="skipAlign(0)"><img src="@/common/image/icon1.png" /><span>投资组合</span></div>
      <div class="flex" @click="skipAlign(1)"><img src="@/common/image/icon2.png" /><span>汇率</span></div>
      <div class="flex">
        <div class="centerBg">
          <img src="@/common/image/icon3.png" />
        </div>
        <div class="emp"></div>
        <span>订单设置</span>
        </div>
      <div class="flex" @click="skipAlign(3)"><img src="@/common/image/icon4.png" /><span>订阅源</span></div>
      <div class="flex" @click="skipAlign(4)"><img src="@/common/image/icon5.png" /><span>更多</span></div>
    </nav>
  </div>
</template>

<script>

export default {
  name:'i-footer',
  data(){
    return{
      skipAlign(e){
        this.$emit('indexNode',e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .i-footer{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    background: rgb(34, 34, 34);
    .footNav{
      padding-top:0.5rem;
      display: flex;
      div.flex{
        flex:1;
        text-align: center;
        img{
          vertical-align: middle;
          width:2rem;
        }
        span{
          display: inline-block;
          width:100%;
          color:#e2e2e2;
        }
      }
      div.flex:nth-of-type(3){
        position: relative;
        .emp{
          width:2rem;
          height:2rem;
        }
        .centerBg{
          position: absolute;
          padding:0.5rem;
          top:-1.3rem;
          left:50%;
          margin-left:-1.7rem;
          background: rgb(34, 34, 34);
          border-radius: 50%;
          img{
            
            background: rgb(105, 105, 105);
            padding:0.2rem;
            border-radius: 50%;
          }

        }

      }
    }
    
  }
</style>
