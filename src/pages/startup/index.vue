<script setup lang="ts">
onLoad(() => {
  const data = {
    name: '张三',
    age: 18
  }
  setTimeout(() => {
    uni.redirectTo({
      url: `/pages/index/index?data=${JSON.stringify(data)}`
    })
  }, 1000)
})
</script>

<template>
  <view>微信小程序启动页</view>
</template>
