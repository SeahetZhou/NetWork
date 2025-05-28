<template>
<div class="head"> 
  <h1>
    商店
  </h1>
  <input type="text" placeholder="搜索商品或店铺" class="search"/>
</div>
</template>
<script setup lang="ts" name="Head"> 
</script>
<style scoped>
.head{
  width: 100%;
  background-color: #fff;
  margin: 0px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: aqua;
  position: fixed;
  top: 0;
}
.search{
  width: 80%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  padding-left: 10px;
  border-radius: 5px;
}
</style>