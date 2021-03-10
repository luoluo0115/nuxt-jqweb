<template>
  <div class="bread-menu">
   <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"><i class="el-icon-s-home"></i>首页</el-breadcrumb-item>
      <el-breadcrumb-item   v-for="(item, index) in breadList" :key="index">
        <a :href="item.link">{{item.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadMenu',
  components: {
  },
  props: {
    breadList: {
      type: Array,
    }
  },
  data() {
    return {}
  },
  computed: {
  }
}
</script>

<style scoped>
.bread-menu{
  border-bottom: 1px solid #efefef;
  padding: 10px 0;
  margin-bottom: 20px;

}
</style>
