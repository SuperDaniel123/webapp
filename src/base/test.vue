<template>
  <div class="test">
    <div @click="goback">ddd</div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {

    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
