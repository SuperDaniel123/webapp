<template>
  <div class="loading">
      <div class="loadBox">
        <Spinner type="lines" ></Spinner>
        <div>loading</div>
      </div>
  </div>
</template>

<script>
import { Spinner } from 'vux'
export default {
  name:'loading',
  components:{
      Spinner
  },
  data(){
      return{
          
      }
  }
}
</script>

<style lang="less" scoped>
    .loadBox{
        position: absolute;
        top:40%;
        width:100%;
        text-align: center
    }
</style>
