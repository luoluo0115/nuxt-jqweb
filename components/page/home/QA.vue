<template>
   <section class="figer-wrapper  pb-5 mt-5 pt-5" :class="bg">
        <div class="title mb-5  container text-center title-hr">
            <h3>常见问题</h3>
            <h4 class="text-1e6ce8 ">Q&A</h4>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 align-self-center text-center mb-5">
                    <button type="button" class="btn btn-primary pl-4 pr-4">日常疑惑</button>
                    <button type="button" class="btn btn-secondary pl-4 pr-4">新手指南</button>
                </div>
                <div class="accordion col-12" role="tablist">
                     <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-1>
                            <img :src="QAImg"  alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">机巧完整记账申报流程是怎样的？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                       <div class="card card-body">
                            <a target="_blank" href="http://ms.jiqiao.tech/FileDown/GetSharedImageQJZ?image_code=A001" class="text-666">点击了解详情</a>
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a  class="col-12 mb-4 Q-item d-block" block  v-b-toggle.accordion-2>
                            <img :src="QAImg"  alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">每月如何上传票据？上传有误/遗漏能否撤回重新上传？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                       <div class="card card-body">
                           <a target="_blank" href="https://mp.weixin.qq.com/s/8uYr4sNzOEjzRnHgIest3g" class="text-666">点击了解详情</a>
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-3>
                            <img :src="QAImg"  alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">巧记账适合什么样类型的公司？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                       <div class="card card-body">
                            答：<p>① 巧记账只需拍照就能完成记账报税，节省出聘请专职会计的费用，适合初创的企业；</p>
                            <p>②巧记账按凭证数量浮动式计费，且可按月支付。适合预算低、票量较少的企业。相较传统代账公司，可为企业节省约70%的费用。</p>
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-4>
                            <img :src="QAImg"  alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">巧记账准确率高吗？怎样确保做账、申报质量？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
                       <div class="card card-body">
                            答：巧记账的票据识别率98%，记账准确率99.99%。从智能做账、人工审核两方面确保记账质量。机巧科技采用最新的图像识别和人工智能技术，经由多名20年以上经验的财税领域专家协同开发，研制最符合小微企业实际情况的会计分录，可为用户实现全自动无纸化记账和申报服务。
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-5>
                            <img :src="QAImg" alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">如果代账过程中出现问题，我要找谁及时处理调整？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
                       <div class="card card-body">
                            答：您可从机巧网站任意页面右侧的悬浮栏，点击“在线客服”联系机巧服务人员，或直接拨打机巧咨询热线：021-54505858/13002193888
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-6>
                            <img :src="QAImg" alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">机巧“凭票据数量浮动式收费”的标准是什么？充值有返利的比例是多少？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
                        <div class="card card-body">
                            <p>①若同时委托机巧代办注册公司，代理记账费为：申报费50元/月+月凭证数×10元</p>
                            <p>②若没有委托机巧代办注册公司，代理记账费为：申报费68元/月+月凭证数×10元</p>
                            <p>*凭证是指编制的会计凭证，相同类型的票据、相同人员或公司，即计为1张凭证。</p>
                            <p>充值奖励：充1000元送100元；充3000元送450元；充5000元送1000元。</p>
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-7>
                            <img :src="QAImg" alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">巧记账的服务具体包括什么？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
                        <div class="card card-body">
                            答：巧记账的服务包括“票据识别、生成凭证、AI记账、人工审核、税款计算、税务申报、代缴税款、会计账簿、财务报表生成、工商年检”等。
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-8>
                            <img :src="QAImg" alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">为什么我拍照上传的票据老是识别不了？上传票据的图片像素最低是多少？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-8" visible accordion="my-accordion" role="tabpanel">
                        <div class="card card-body">
                            答：上传票据无法识别可能因为上传的票据图片像素太低或是图片模糊等。上传票据的图片目前支持jpg、png、bmp格式，图片的长和宽要求最短边大于10px，最长边小于2048 px，图片大小不超过3M。
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-9>
                            <img :src="QAImg" alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">机巧除了代账，还能为企业提供其他服务吗？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-9" visible accordion="my-accordion" role="tabpanel">
                        <div class="card card-body">
                            答：可以。除了代理记账之外，机巧科技同时可为企业提供工商注册、知产商标、高企认定、行政审批、人事银行、设计建站等一站式创业服务。
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-10>
                            <img :src="QAImg"  alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">如果使用机巧代账，我注册账号时需要准备哪些个人及企业信息？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-10" visible accordion="my-accordion" role="tabpanel">
                        <div class="card card-body">
                            答：您需要准备个人手机号、邮箱等个人信息，以及法人姓名、法人身份证号码、法人联系方式、公司名称、社会信用号等企业信息。
                        </div>
                    </b-collapse>
                    <div class="d-block">
                        <a class="col-12 mb-4 Q-item d-block" block v-b-toggle.accordion-11>
                            <img :src="QAImg"  alt='财务代理' class="d-lg-inline-block mr-3" /><span class="d-lg-inline-block ">巧记账如何保证我的做账数据信息安全？</span>
                        </a>
                    </div>
                    <b-collapse id="accordion-11" visible accordion="my-accordion" role="tabpanel">
                        <div class="card card-body">
                            答：巧记账采用阿里云专业加密存储与传输方式，并使用网络安全保护措施，努力为客户的信息安全提供保障。
                        </div>
                    </b-collapse>
                </div>
            </div>
            <p class="text-center mt-5  "><a class="text-044fff" href="https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2"  rel='nofollow' target="_blank">更多问题>></a></p>
        </div>
    </section>
</template>
<script>

export default {
  name: 'QA',
  data () {
    return {
      text: ``,
      QAImg: require('~/assets/image/icon-Q.png'),
      activeNames: '1'
    }
  },
  props: {
    bg: String
  },
  mounted () {}
}
</script>
<style scoped>

</style>
