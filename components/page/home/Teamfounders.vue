<template>
   <section class="figer-wrapper   pb-5 mt-5" :class="bg" id="about">
        <div class="title mb-5 container text-center title-hr">
            <h3>领军人物</h3>
            <h4 class="text-1e6ce8 ">Team of Founders</h4>
        </div>
        <div class=" pt-5 ">
            <div class="container">
                <div class="row  ">
                    <div class="col-md-4 col-12  text-333 text-center clearfix">
                        <div class=" ml-2 mr-2  ml-md-3 mr-md-3 leading-item pt-3 ">
                            <img :src="figer_img1" class=" img-fluid " />
                            <p class="mt-3"><span class="pt-1 pb-1 pl-md-5 pr-md-5  pl-sm-1 pr-sm-1 bg-044fff text-white">黄侃</span></p>
                            <p class="mt-3 font-16"><strong>机巧科技CEO</strong></p>
                            <p class="mt-2 mb-2 font-14"><strong>慕尼黑工业大学物理学硕士</strong></p>
                            <p class="mt-2 mb-2 font-14"><strong>伦敦大学学院管理学硕士</strong></p>
                            <p class="mt-2 mb-3 font-14"><strong>上海代理记账行业协会专家委员会副主任</strong></p>
                            <p class="pt-3 pb-3 pl-2 pr-2 pl-md-2 pl-md-2 border-top font-14 text-left">
                                曾于德国法兰克福中欧国际交易所担任产品经理，于上海企汇集团担任总裁助理及产品经理，对代理记账行业有多年的深入研究，可准确分析企业服务市场的痛点及客户的需求。
                            </p>
                        </div>

                    </div>
                    <div class="col-md-4 col-12  text-333 text-center clearfix">
                        <div class=" ml-2 mr-2  ml-md-3 mr-md-3 leading-item  pt-3">
                            <img :src="figer_img2" class="img-fluid mb-3 mb-sm-0" />
                            <p class="mt-3"><span class="pt-1 pb-1 pl-md-5 pr-md-5  pl-sm-1 pr-sm-1 bg-044fff text-white">周维明</span></p>
                            <p class="mt-3"><strong>机巧科技CTO</strong></p>
                            <p class="mt-2 mb-2 font-14"><strong>复旦大学MBA </strong></p>
                            <p class="mt-2 mb-2 font-14"><strong>系统架构师</strong></p>
                            <p class="mt-2 mb-3 font-14"><strong>财税自动化设计师</strong></p>
                            <p class="pt-3 pb-3  pl-2 pr-2 pl-md-2 pl-md-2 border-top font-14 text-left">
                                曾任500强公司IT部门经理，实施OracleERP的上线，以及负责生产线自动化以及企业ERP的研发；对企业信息自动化和企业ERP有深入研究，特别是对流程控制、财税自动化有独到的见解。
                            </p>
                        </div>

                    </div>
                    <div class="col-md-4 col-12  text-333 text-center clearfix">
                        <div class=" ml-2 mr-2  ml-md-3 mr-md-3 leading-item pt-3">
                            <img :src="figer_img3" alt='财务代理' class="img-fluid mb-3 mb-sm-0" />
                            <p class="mt-3"><span class="pt-1 pb-1 pl-md-5 pr-md-5  pl-sm-1 pr-sm-1 bg-044fff text-white">郑列豪</span></p>
                            <p class="mt-3 "><strong>机巧科技会计负责人</strong></p>
                            <p class="mt-2 mb-2 font-14"><strong>中级会计师  </strong></p>
                            <p class="mt-2 mb-2 font-14"><strong>办公自动化应用师</strong></p>
                            <p class="mt-2 mb-3 font-14"><strong>曾任500强企业财务主管</strong></p>
                            <p class="pt-3 pb-3  pl-2 pr-2 pl-md-2 pl-md-2 border-top font-14 text-left">
                                根据丰富的会计及代理记账流程化管理经验，将代理记账从单人单户企业服务模式，转化为系统流程化服务；控制发票开具、账务资料归集、会计凭证编制复核等流程系统及负责各模块准确性监管。
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
  name: 'Teamfounders',
  data () {
    return {
      figer_img1: require('~/assets/image/img-figer-01.png'),
      figer_img2: require('~/assets/image/img-figer-02.png'),
      figer_img3: require('~/assets/image/img-figer-03.png')
    }
  },
  props: { bg: String },
  mounted () {}
}
</script>
<style scoped>

</style>
