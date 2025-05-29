import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Cart from '@/views/Cart.vue'
import UserCenter from '@/views/UserCenter.vue'
import Message from '@/views/message.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetail,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/user',
      name: 'userCenter',
      component: UserCenter,
    },
      // ... existing code ...
      {
        path: '/message',
        name: 'message',
        component: Message,
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path:'/register',
        name:'register',
        component: Register// 懒加载注册组件
      }
  ],
})

 export default router
