<template>
<div class="guide">
    <div class="guide-item">首页</div>
    <div class="guide-item">消息</div>
    <div class="guide-item">购物车</div>
    <div class="guide-item">我的</div>
</div>
</template>
<script setup lang="ts" name="Footer"> 
</script>
<style scoped>
.guide{
    width: 100%;
    background-color: #b92626;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
}
.guide-item{
    width: 80px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f1e4e4;
    font-size: 20px;
    text-decoration: none;
    transition: all .3s ease;
}
.guide-item:hover{
      color: #fff;
        background-color: #b92626;
}
</style>