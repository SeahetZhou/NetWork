<template>
    <div class="message-head"> 
      <h1>
        我的消息
      </h1>
      <!-- 可以添加消息搜索功能，或者消息筛选按钮 -->
      <div class="message-actions">
        <button class="unread-btn" @click="filterUnread">未读消息</button>
      </div>
    </div>
</template>
<script setup lang="ts" name="MessageHead"> 
// 筛选未读消息的方法
const filterUnread = () => {
  // 这里可以添加筛选未读消息的逻辑
  console.log('筛选未读消息');
};
</script>
<style scoped>
.message-head {
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

.message-head h1 {
    color: #ffffff;
    margin: 0 0 15px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.message-actions {
    display: flex;
    gap: 10px;
}

.unread-btn {
    background-color: #ffffff;
    color: #1a237e;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.unread-btn:hover {
    background-color: #e0e0e0;
}
</style>