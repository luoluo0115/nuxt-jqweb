<template>
    <section class="tech-wrapper   pt-15 pb-30 mt-30">
        <div class="title mb-30 z-container">
            <h2>收费灵活</h2>
            <h4 class="text-1e6ce8 ">Flexible Charge</h4>
        </div>
        <div class="bg-f8f6f9">
            <div class="z-container tech-main">
                <el-row >
                    <el-col :span="10" :offset="1">
                        <p>传统代理记账公司都向客户直接收取一整年的费用，且客户不满意想退出时手续麻烦，卡着客户不让退出。对客户而言有较高的试错风险……<br>但在机巧:</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 按月度结算客户的代理记账费用</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 客户可随时充值任意金额，充值越多赠送也越多</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 不满意随时退出，5个工作日内完成退出手续，试错成本低</p>
                    </el-col>
                    <el-col :span="10" :offset="1">
                        <p>传统代理记账公司都向客户直接收取一整年的费用，且客户不满意想退出时手续麻烦，卡着客户不让退出。对客户而言有较高的试错风险……<br>但在机巧:</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 按月度结算客户的代理记账费用</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 客户可随时充值任意金额，充值越多赠送也越多</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 不满意随时退出，5个工作日内完成退出手续，试错成本低</p>
                    </el-col>
                </el-row>
                <div class="row  pt-30">
                    <div class="col-md-12 col-12  text-333">
                        <p>传统代理记账公司都向客户直接收取一整年的费用，且客户不满意想退出时手续麻烦，卡着客户不让退出。对客户而言有较高的试错风险……<br>但在机巧:</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 按月度结算客户的代理记账费用</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 客户可随时充值任意金额，充值越多赠送也越多</p>
                        <p class="text-333 mb-2"><i class="iconfont  iconfangkuai text-1e6ce8"></i> 不满意随时退出，5个工作日内完成退出手续，试错成本低</p>
                    </div>
                    <div class="col-md-12 col-xs-12  mt-5 mb-5">
                        <img :src="flexibleImg" class="img-flexible-bottom" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
  name: 'Flexiblecharge',
  data () {
    return {
      flexibleImg: require('~/assets/image/img-flexible-bottom.png')
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
