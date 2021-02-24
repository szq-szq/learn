<template>
  <div id="app">
    <h2>我是app组件</h2>
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">about</button> -->
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link :to="'/user/'+userId">user</router-link>
    <!-- <router-link to="/profile">profile</router-link> -->
    <router-link :to="{path:'/profile',query:{name:'szq',age:22,height:1.83}}">profile</router-link>
    <keep-alive exclude="profile,user">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'szq'
    }
  },
  methods:{
    // homeClick(){
    //   this.$router.replace('/home')
    // },
    // aboutClick(){
    //   this.$router.replace('/about')
    // }
  }
}
</script>

<style>

</style>
