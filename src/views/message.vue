<template>
  <div class="message-page">
    <!-- 引入消息头部组件 -->
    <MessageHead />
    <h1>消息页面</h1>
    <!-- 这里可以添加消息列表或其他相关组件 -->
  </div>
</template>

<script setup lang="ts">
// 引入消息头部组件
import MessageHead from '@/components/head/messagehead.vue';
// 这里可以添加组件的逻辑代码
var a = 1;
</script>

<style scoped>
.message-page {
  padding: 20px;
  /* 考虑到头部是 fixed 定位，添加顶部边距防止内容被遮挡 */
  margin-top: 100px; 
}
</style>