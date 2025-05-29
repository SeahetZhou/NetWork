<template>
    <div class="car-head"> 
      <h1>
        我的购物车
      </h1>
      <!-- 可以添加购物车相关的搜索功能或筛选按钮 -->
      <div class="car-actions">
        <button class="clear-btn" @click="clearCart">清空购物车</button>
      </div>
    </div>
</template>
<script setup lang="ts" name="CarHead"> 
// 清空购物车的方法
const clearCart = () => {
  // 这里可以添加清空购物车的逻辑
  console.log('清空购物车');
};
</script>
<style scoped>
.car-head {
    width: 100%;
    background: linear-gradient(90deg, #1a237e, #303f9f);
    padding: 20px 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    animation: fadeInDown 0.5s ease-out;
    box-sizing: border-box; 
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.car-head h1 {
    color: #ffffff;
    margin: 0 0 15px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.car-actions {
    display: flex;
    gap: 10px;
}

.clear-btn {
    background-color: #ffffff;
    color: #1a237e;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.clear-btn:hover {
    background-color: #e0e0e0;
}
</style>