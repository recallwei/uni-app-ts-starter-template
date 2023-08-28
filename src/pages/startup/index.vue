<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'

onLoad(() =>
  setTimeout(() => {
    uni.redirectTo({ url: '/pages/' })
  }, 1000)
)
</script>

<template><view>Startup</view></template>
