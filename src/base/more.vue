<template>
  <div class="more">
      <div class="line"><img class="icon" src="@/common/image/calendar.png" /><span>财经日历</span></div>
      <div class="line"><img class="icon" src="@/common/image/bank_note.png" /><span>入金</span></div>
      <div class="line"><img class="icon" src="@/common/image/setting.png" /><span>设置</span></div>
      <div class="line"><img class="icon" src="@/common/image/logout.png" /><span>登出</span></div>
      <div></div>
  </div>
</template>

<script>
export default {
  name:"more"
}
</script>
<style lang="less" scoped>
    .more{
        position: relative;
    }
    .line{
        padding:0 2rem;
        line-height: 4rem;
        background: rgb(34, 34, 34);
        border-bottom: 1px solid #000;
        .icon{
            width:1.5rem;
            height: 1.5rem;
            vertical-align: sub;
            margin-right: 1rem;
        }
        span{
            font-size:1.3rem;
            color:#fff;
        }
    }
</style>