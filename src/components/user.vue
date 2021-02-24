<template>
  <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息</p>
      <p>{{userId}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    components: {

    },
    computed:{
        userId(){
            return this.$route.params.userId
        }
    }
  }
</script>

<style scoped>

 
</style>
