<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')

function navTo(url: string) {
  uni.navigateTo({
    url
  })
}
</script>

<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>

  <view class="link-list">
    <text @click="navTo('/pages/login/index')">/login</text>
    <text @click="navTo('/pages/list/index')">/list</text>
    <text @click="navTo('/pages/startup/index')">/startup</text>
  </view>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.link-list {
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 0px 8px 8px 8px;
  border: 1px solid #8f8f94;
  border-radius: 10px;
  & > text {
    color: #8f8f94;
    text-align: center;
    margin-top: 8px;
    transition: all 0.3s ease-in-out;
  }
}
</style>
