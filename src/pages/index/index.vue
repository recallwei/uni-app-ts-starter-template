<script setup lang="ts">
import type { ToastRef } from 'uview-plus'

const title = ref('Hello')
const user = ref<User | null>(null)

const uToastRef = ref<ToastRef | null>(null)

function navTo(url: string) {
  uni.navigateTo({
    url
  })
}

interface User {
  name: string
  age: number
}

interface Option {
  data: string
}

function handleClick() {
  uToastRef.value!.show({
    message: 'Hello World',
    duration: 2000
  })
}

onLoad((option) => {
  const { data } = option as Option
  try {
    user.value = <User>JSON.parse(data)
  } catch {
    user.value = null
  }
})
</script>

<template>
  <view>
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
      <text @click="navTo('/pages/components/index')">/components</text>
    </view>

    <template v-if="user">
      <view class="user">
        <text>{{ user.name }}</text>
        <text>{{ user.age }}</text>
      </view>
    </template>

    <view
      style="
        display: flex;
        width: fit-content;
        justify-content: center;
        gap: 4px;
        margin: auto;
      "
    >
      <u-button
        text="确定"
        type="primary"
        @click="handleClick"
      >
      </u-button>
      <u-button
        text="取消"
        type="primary"
      >
      </u-button>
    </view>

    <u-toast ref="uToastRef" />
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

.user {
  display: flex;
  flex-direction: column;
  margin: 20px;
  & > text {
    margin-top: 4px;
  }
}
</style>
