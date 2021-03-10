<template>
  <section class="tech-wrapper  pt-15 pb-30 mt-30">
      <div class="title mb-30 z-container">
          <h2>高科技</h2>
          <h4 class="text-1e6ce8 pb-15">High Technology</h4>
      </div>
      <div class="bg-f8f6f9 pt-30 pb-30">
          <div class="z-container tech-main">
            <el-row>
              <el-col :span="17">
                <p class="text-333">机巧科技采用最新的图像识别和人工智能技术，经由多名20年以上经验的财税领域专家协同开发，研制最符合小微企业实际情况的会计分录，为用户实现全自动无纸化记账和申报服务.</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 智能多维度校验的OCR图像识别技术</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 多名资深财务总监研制的做账逻辑</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 使用贝叶斯算法实现自动分类票据</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 使用TensorFlow实现RPA自动纳税申报</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 全数据上传阿里云，保障用户信息安全</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i>实时获取财务报表，账本账册，监测企业动态</p>
                <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 企业预警信息、缴款信息实时推送</p>
                <a href="https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2"  rel='nofollow' target="_blank" >了解详情>></a>
              </el-col>
              <el-col :span="7">
                <img :src="techImg" alt='财务代理' class="img-tech-right" />
              </el-col>
            </el-row>
          </div>
      </div>
  </section>
</template>
<script>
export default {
  name: 'Technology',
  data () {
    return {
      list: [],
      techImg: require('~/assets/image/index-tech-right-bg.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
p{
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
</style>
