import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/hello//Hello'
import Login from '@/views/login/login'
Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
