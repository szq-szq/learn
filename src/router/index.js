import Vue from 'vue'
// import home from '../components/home.vue'
// import about from '../components/about.vue'
import VueRouter from 'vue-router'
// import user from '../components/user.vue'

const home=()=>import('../components/home.vue')
const homeNew=()=>import('../components/homeNew.vue')
const homeMessage=()=>import('../components/homeMessage.vue')
const about=()=>import('../components/about.vue')
const user=()=>import('../components/user.vue')
const profile=()=>import('../components/profile.vue')

Vue.use(VueRouter)

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
    meta:{
      title:'home'
    },
    children:[
      {
        path:'',
        redirect:'new'
      },
      {
        path:'new',
        component:homeNew
      },
      {
        path:'message',
        component:homeMessage
      }
    ]
  },
  {
    path:'/about',
    component:about,
    meta:{
      title:'about'
    }
  },
  {
    path:'/user/:userId',
    component:user,
    meta:{
      title:'user'
    },
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      title:'profile'
    }
  }
]

const router=new VueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title
  next()
})

export default router