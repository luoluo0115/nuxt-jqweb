<template>
  <div class="admin-layout-wrap">
    <div class="admin-layout-left">
    </div>
    <div class="admin-layout-main">
    </div>

  </div>
</template>

<script>

export default {
  name: 'AdminLayout',
  components: {
  },
  head() {
    return {
      title: '后台管理系统 - 机巧管理系统'
    }
  }
}
</script>

<style lang="less" scoped>
.admin-layout-wrap {
  height: 100%;
  width: 100%;
  .admin-layout-left {
    float: left;
    position: relative;
    width: 200px;
    height: 100%;
  }
  .admin-layout-main {
    height: 100%;
    overflow: auto;
  }
}
</style>
