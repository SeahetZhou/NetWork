<template>
  <div class="usercenter-page">
    <!-- 引入个人中心头部组件 -->
    <UserHead />
    <!-- 用户信息板块 -->
    <div class="user-info-section" @click="handlelogin">
      <template v-if="isLoggedIn">
        <img :src="userAvatar" alt="用户头像" class="user-avatar">
        <div class="user-basic-info">
          <h2 class="user-name">{{ userName }}</h2>
          <p class="user-email">{{ userEmail }}</p>
          <button class="edit-profile-btn" @click="editProfile">编辑资料</button>
        </div>
      </template>
      <template v-else>
        <div class="login-prompt">请登录</div>
      </template>
    </div>

    <!-- 功能导航板块 -->
    <div class="function-nav" v-if="isLoggedIn">
      <div class="nav-item" @click="goToOrders">
        <i class="icon">📦</i>
        <span>我的订单</span>
      </div>
      <div class="nav-item" @click="goToFavorites">
        <i class="icon">❤️</i>
        <span>我的收藏</span>
      </div>
      <div class="nav-item" @click="goToAddress">
        <i class="icon">📍</i>
        <span>收货地址</span>
      </div>
      <div class="nav-item" @click="goToSettings">
        <i class="icon">⚙️</i>
        <span>设置</span>
      </div>
    </div>

    <!-- 订单统计板块 -->
    <div class="order-statistics" v-if="isLoggedIn">
      <h3>订单统计</h3>
      <div class="stat-item">
        <span>待付款</span>
        <span>{{ pendingOrders }}</span>
      </div>
      <div class="stat-item">
        <span>待发货</span>
        <span>{{ toShipOrders }}</span>
      </div>
      <div class="stat-item">
        <span>待收货</span>
        <span>{{ toReceiveOrders }}</span>
      </div>
      <div class="stat-item">
        <span>已完成</span>
        <span>{{ completedOrders }}</span>
      </div>
    </div>

    <!-- 退出登录按钮 -->
    <button class="logout-btn" @click="logout" v-if="isLoggedIn">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UserHead from '@/components/head/userhead.vue';

const router = useRouter();

// 模拟登录状态
const isLoggedIn = ref(false);

// 模拟用户信息
const userAvatar = ref('https://example.com/avatar.jpg');
const userName = ref('张三');
const userEmail = ref('zhangsan@example.com');

// 模拟订单统计数据
const pendingOrders = ref(3);
const toShipOrders = ref(2);
const toReceiveOrders = ref(1);
const completedOrders = ref(10);

// 编辑资料方法
const editProfile = () => {
  console.log('编辑资料');
};

// 跳转方法
const goToOrders = () => {
  router.push('/user/orders');
};

const goToFavorites = () => {
  router.push('/user/favorites');
};

const goToAddress = () => {
  router.push('/user/address');
};

const goToSettings = () => {
  router.push('/user/settings');
};

const handlelogin = () => {
  if (!isLoggedIn.value) {
    router.push('/login');
  }
};
// 退出登录方法
const logout = () => {
  isLoggedIn.value = false;
  router.push('/login');
};

// 模拟登录成功后更新状态，实际使用中应从状态管理获取
const simulateLogin = () => {
  isLoggedIn.value = true;
};

// 假设在组件挂载时检查登录状态
// onMounted(() => {
//   // 实际使用中应从状态管理或本地存储获取登录状态
//   simulateLogin();
// });
</script>

<style scoped>
.usercenter-page {
  padding: 20px;
  /* 考虑到头部是 fixed 定位，添加顶部边距防止内容被遮挡 */
  margin-top: 100px; 
}

.user-info-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center; /* 新增，用于居中“请登录”提示 */
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.user-basic-info {
  flex-grow: 1;
}

.user-name {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.user-email {
  margin: 5px 0 10px;
  font-size: 14px;
  color: #666;
}

.edit-profile-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.function-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.nav-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.nav-item:hover {
  transform: translateY(-3px);
}

.icon {
  font-size: 24px;
  display: block;
  margin-bottom: 5px;
}

.order-statistics {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.stat-item:last-child {
  border-bottom: none;
}

.logout-btn {
  width: 100%;
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.logout-btn:hover {
  background-color: #c82333;
}

.login-prompt {
  font-size: 18px;
  color: #666;
}
</style>