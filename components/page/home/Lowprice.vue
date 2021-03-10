<template>
  <section class="price-wrapper bg-000url pt-50 mt-30 pb-50 mb-50">
    <div class="z-container">
        <div class="title pb-30 text-center text-fff">
            <h2>价格低</h2>
            <h4 class="">Low Price</h4>
        </div>
        <div class="justify-content-around text-fff font-16">
            <el-row  :gutter="20" >
                <el-col :span="6" :offset="1" class="price-item text-center ">
                    <el-table
                        :stripe="true"
                        :data="tableDataCW"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="专职财务"
                           >
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="6" :offset="2" class="price-item text-center">
                    <el-table
                        :stripe="true"
                        :data="tableDataDZ"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="传统代理记账公司"
                           >
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="6" :offset="2" class="price-item JQ">
                    <el-table
                        :stripe="true"
                        :data="tableDataJQ"
                        style="width: 100%"
                        row-class-name="success-row">
                        <el-table-column
                            prop="date"
                            label="机巧智能记账"
                           >
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
        <p class="text-fff text-center pt-50 font-16">机巧科技根据用户每月实际的凭证数量浮动式收费，当月无票据时最低50元/月；80%的小微企业平均每月代理记账费用不超过100元。</p>
        <p class="text-fff text-center font-16">小规模企业立享单月封顶价保护（单月凭证数量超过20张后不再计费）   活动时间：即日起至2020年12月止
        </p>
    </div>
</section>
</template>
<script>

export default {
  name: 'Lowprice',
  data () {
    return {
        tableDataCW: [{
            date: '前期投入成本较高',
          }, {
            date: '招聘费时费力',
          }, {
            date: '存在人员不稳定性',
          }, {
            date: '5000-6000元/月',
          }],
          tableDataDZ: [{
            date: '一般纳税人客户费用较高',
          }, {
            date: '打包收费，每月票据少的客户不公平',
          }, {
            date: '后期对接费时费力',
          }, {
            date: '300-500元/月',
          }],
            tableDataJQ: [{
            date: '按当月凭证数浮动式收费',
          }, {
            date: '纳税申报基础费用仅50元/月',
          }, {
            date: '大部分客户平均每月低于100元',
          }, {
            date: '≥50元/月',
          }]
    }
  },
  mounted () {
  }
}
</script>
<style >

.el-table td, .el-table th {
    text-align: center;
    color: #333;
}
.el-table .success-row {
    background: #e7f0fd;
}
.el-table th {
    background-color: #7d7d7d;
    color:#fff
}
.price-item.JQ .el-table th {
    background-color: #044fff
}
</style>
