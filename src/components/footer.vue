<template>
<div class="guide">
    <router-link to="/" class="guide-item" :class="{ active: isActive('/') }">首页</router-link>
    <router-link to="/message" class="guide-item" :class="{ active: isActive('/message') }">消息</router-link>
    <router-link to="/cart" class="guide-item" :class="{ active: isActive('/cart') }">购物车</router-link>
    <router-link to="/user" class="guide-item" :class="{ active: isActive('/user') }">我的</router-link>
</div>
</template>
<script setup lang="ts" name="Footer">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isActive = (path: string) => {
    return router.currentRoute.value.path === path;
};
</script>
<style scoped>
.guide {
    width: 100%;
    background-color: #ffffff;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.guide-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #666666;
    font-size: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.guide-item:hover {
    color: #b92626;
}

.guide-item svg {
    font-size: 24px;
}

/* 激活状态样式 */
.guide-item.active {
    color: #b92626;
    transform: scale(1.1);
}
</style>