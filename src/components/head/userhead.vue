<template>
    <div class="user-head"> 
      <h1>
        个人中心
      </h1>
    </div>
</template>
<script setup lang="ts" name="UserHead"> 
// 移除编辑资料的方法
</script>
<style scoped>
.user-head {
    width: 100%;
    background: linear-gradient(90deg, #1a237e, #303f9f);
    padding: 20px 0; /* 确保左右 padding 为 0 */
    margin: 0; /* 确保 margin 为 0 */
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

.user-head h1 {
    color: #ffffff;
    margin: 0 0 15px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.user-actions {
    display: flex;
    gap: 10px;
}

.edit-btn {
    background-color: #ffffff;
    color: #1a237e;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.edit-btn:hover {
    background-color: #e0e0e0;
}
</style>