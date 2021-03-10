<template>
  <section class="tech-wrapper  pt-5 pb-5 mt-5">
      <div class="title mb-5 container text-center title-hr">
          <h3>无纸化合同服务</h3>
          <h4 class="text-1e6ce8 ">Paperless Processes</h4>
      </div>
      <div class="bg-f8f6f9 pt-5 pb-5">
          <div class="container">
              <div class="row  p-5 ">
                  <div class="col-md-4 col-sm-12  text-333">
                      <div class="contract-item row pt-4 ">
                          <i class="iconfont iconi-dianziqianming col-md-3 col-3 text-center "></i>
                          <div class="col-md-9 col-xs-9">
                              <h5><strong>电子签名</strong></h5>
                              <p>可靠合规，具有法律效力，防篡改防假冒，确保签署主体真实性</p>
                          </div>
                      </div>
                      <div class="contract-item  row pt-4">
                          <i class="iconfont iconhetong col-md-3 col-3 text-center "></i>
                          <div class="col-md-9 col-xs-9">
                              <h5><strong>智能合同</strong></h5>
                              <p>实现便捷的多方在线签署、协同管理、批量签署等，效率显著提升</p>
                          </div>
                      </div>
                      <div class="contract-item  row pt-4">
                          <i class="iconfont iconrenzheng col-md-3 col-3 text-center "></i>
                          <div class="col-md-9 col-xs-9">
                              <h5><strong>认证服务</strong></h5>
                              <p>接入权威数据库，快速完成个人与企业实名认证，实现精准核验</p>
                          </div>
                      </div>

                  </div>
                  <div class="col-md-7 col-sm-12 offset-md-1">
                      <img :src="computerImg" alt='财务代理' class="img-flexible-bottom img-fluid" />
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
export default {
  name: 'Paperlessprocesses',
  data () {
    return {
      list: [],
      computerImg: require('~/assets/image/img-computer-right.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
