<template>
    <div class="head"> 
      <h1>
        商店
      </h1>
      <div class="search-container">
        <input type="text" placeholder="搜索商品或店铺" class="search" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    </div>
    </template>
    <script setup lang="ts" name="Head"> 
    var a=1;
    </script>
    <style scoped>
    .head {
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
        /* 确保内边距和边框包含在宽度内 */
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
    
    .head h1 {
        color: #ffffff;
        margin: 0 0 15px 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    .search-container {
        position: relative;
        width: 90%;
    }
    
    .search {
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        border-radius: 25px;
        padding: 0 50px 0 20px;
        font-size: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
    }
    
    .search:focus {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    .search-icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: #666666;
        width: 24px;
        height: 24px;
    }
    </style>