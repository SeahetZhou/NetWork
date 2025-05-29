<template>
    <div class="register-page">
        <h1>注册</h1>
        <input type="text" v-model="username" placeholder="用户名" />
        <input type="email" v-model="email" placeholder="邮箱" />
        <input type="password" v-model="password" placeholder="密码" />
        <button @click="handleRegister">注册</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

// 定义表单数据
const username = ref('');
const email = ref('');
const password = ref('');

// 模拟注册函数，实际使用时需要替换为真实的 API 调用
const register = async () => {
    // 这里可以添加实际的注册请求代码
    // 假设注册成功
    return true;
};

const handleRegister = async () => {
    try {
        const success = await register();
        if (success) {
            // 注册成功，跳转至主页面
            router.push('/');
        } else {
            console.error('注册失败');
        }
    } catch (error) {
        console.error('注册过程中出现错误:', error);
    }
};
</script>
<style scoped>
.register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f0f2f5;
}

.register-page h1 {
    color: #1877f2;
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.register-page input {
    width: 100%;
    max-width: 300px;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #dddfe2;
    border-radius: 6px;
}

.register-page button {
    width: 100%;
    max-width: 300px;
    padding: 0.8rem;
    background-color: #42b72a;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.2rem;
    cursor: pointer;
}

.register-page button:hover {
    background-color: #36a420;
}
</style>