<template>
  <div>
      <h2>我是首页</h2>
      <p>我是首页内容</p>
      <router-link to="/home/new">news</router-link>
      <router-link to="/home/message">message</router-link>
      
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // name:'home',
    data () {
      return {
        message:'hello',
        path:'/home/new'
      }
    },
    components: {

    },
    created(){
      console.log('home created');
      // document.title='home'
    },
    // mounted(){
    //   console.log('mounted');
      
    // },
    // updated(){
    //   console.log('updated');
      
    // },
    destroyed(){
      console.log('home destoryed');
      
    },
    activated(){
      this.$router.push(this.path).catch(error=>{}),
      console.log('activated');
      
    },
    deactivated(){
      console.log('deactivated');
      
    },
    beforeRouteLeave(to,from,next){
      console.log(this.$route.path)
      this.path=this.$route.path
      next()
    }
  }
</script>

<style scoped>

 
</style>

