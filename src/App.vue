<template>
  <router-view />
  <!-- 根据当前路由判断是否显示底部导航栏 -->
  <Footer v-if="!isLoginOrRegister" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Footer from '@/components/footer.vue';
import { computed } from 'vue';
const route = useRoute();
// 判断当前路由是否为登录或注册页面
const isLoginOrRegister = computed(() => {
  return ['/login', '/register'].includes(route.path);
});
</script>

<style scoped>
</style>