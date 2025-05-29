<template>
    <div class="login-page">
        <h1>登录页面</h1>
        <p>请输入您的邮箱或账号和密码</p>
        <input type="text" placeholder="邮箱或账号" />
        <input type="password" placeholder="密码" />
        <button>登录</button>
        <p>还没有账号？<a @click="register">注册</a></p>
    </div>
</template>
<script setup lang="ts">
import router from '@/router';

const register = () => {
    // 跳转到注册页面的逻辑
    router.push('/register');
};
</script>
<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f2f5;
}

.login-page h1 {
    color: #1877f2;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.login-page p {
    color: #606770;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.login-page input {
    width: 100%;
    max-width: 300px;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #dddfe2;
    border-radius: 6px;
}

.login-page button {
    width: 100%;
    max-width: 300px;
    padding: 0.8rem;
    background-color: #1877f2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.2rem;
    cursor: pointer;
}

.login-page button:hover {
    background-color: #166fe5;
}

.login-page a {
    color: #1877f2;
    text-decoration: none;
}

.login-page a:hover {
    text-decoration: underline;
}
</style>