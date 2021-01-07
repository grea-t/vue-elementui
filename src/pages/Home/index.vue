<template>
  <div>
    <Nav/>
    Home
  </div>
</template>

<script>
  import Nav from '../../components/Nav'

  export default {
    name: "Home",
    components: {
      Nav
    },
    mounted() {
      this.$api.getTodayRecommend({
        method: 'baidu.ting.billboard.billList',
        type: 1,
        size: 10,
        offset: 0
      }).then(res => {
        console.log(res.data)
      })
    }
  }
</script>

<style scoped>

</style>
