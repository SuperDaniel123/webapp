<template>
  <div>
      <ul class="recordList">
          <li v-for="(item,index) in list" :key="index">
              <h3 class="title clearfix">{{item.type}}<span class="red">{{item.bep}}</span></h3>
              <p v-text="item.dateTime"></p>
              <p>余额为{{item.sum}}</p>
              <p class="num">说明单编号{{item.num}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
      return{
          list:[
                {
                    type:'融资',
                    bep:'0.00',
                    dateTime:'2018年3月09日 上午5:00:00',
                    sum:'99,999.97USD',
                    num:'19'
                }
          ]
      }
  }
}
</script>

<style lang="less" scoped>
    .recordList{
        padding:0.5rem 1rem;
        li{
            margin-top:0.5rem;
            position: relative;
            padding-bottom: 1rem;
            border-bottom: 1px solid #333;
            .title{
                font-size:1.2rem;
                color:#fff;
                span{
                    float: right;
                }
                span.red{
                    color:red;
                }
                span.green{
                    color:green;
                }

            }
            p{
                line-height: 1.5rem;
            }
            p.num{
                position: absolute;
                right:0;
                bottom:1rem;
            }
        }
    }
</style>
