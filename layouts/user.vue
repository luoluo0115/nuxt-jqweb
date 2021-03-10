<template>
  <app-layout>
    <div class="z-container">
      <div class="user-page-wrap">
        <div class="user-page-side">
          <div class="hidden-xs">
            <user-brief />
          </div>
        </div>
        <div class="user-page-main">
          <nuxt />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/framework/AppLayout/AppLayout'


export default {
  name: 'AppLayoutUser',
  components: {
    AppLayout,
  },
  head() {
    return {
      title: '个人中心'
    }
  }
}
</script>

<style lang="less" scoped>
.user-page-wrap {
  min-height: calc(100vh - @heightHeader - @heightFooter - 40px);
  display: flex;
}
.user-page-side {
  flex: none;
  width: 240px;
  min-height: 100%;
  margin-right: 10px;
  background: #fff;
}
.user-page-main {
  flex: 1;
}
</style>
