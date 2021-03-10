<template>
  <section>
    <home-swiper :slideindex="0"></home-swiper>
    <div class="content-wrapper">
      <home-technology ></home-technology>
      <home-lowprice ></home-lowprice>
      <home-flexiblecharge ></home-flexiblecharge>
      <!-- 
      <Home-Flexiblecharge ></Home-Flexiblecharge>
      <Home-Businessphilosophy ></Home-Businessphilosophy>
      <Home-Paperlessprocesses ></Home-Paperlessprocesses> -->
    </div>
     <!-- <Home-Swiper :slideindex="0"></Home-Swiper>
    <div class="content-wrapper">
      <Home-Technology ></Home-Technology>
      <Home-Lowprice ></Home-Lowprice>
      <Home-Flexiblecharge ></Home-Flexiblecharge>
      <Home-Businessphilosophy ></Home-Businessphilosophy>
      <Home-Paperlessprocesses ></Home-Paperlessprocesses>
      <Home-Teamfounders :bg="bgfff"></Home-Teamfounders>
      <Home-QA :bg="bgf8f6f9"></Home-QA>
    </div>
    <Home-Safe></Home-Safe>
    <Home-Floatbar></Home-Floatbar> -->
  </section>
</template>

<script>
import md5 from 'js-md5'
import HomeSwiper from '~/components/page/home/Swiper.vue'
import HomeTechnology from '~/components/page/home/Technology.vue'
import HomeLowprice from '~/components/page/home/Lowprice.vue'
import HomeFlexiblecharge from '~/components/page/home/Flexiblecharge.vue'
// import HomeBusinessphilosophy from '~/components/page/home/Businessphilosophy.vue'
// import HomePaperlessprocesses from '~/components/page/home/Paperlessprocesses.vue'
// import HomeTeamfounders from '~/components/page/home/Teamfounders.vue'
// import HomeQA from '~/components/page/home/QA.vue'
// import HomeSafe from '~/components/page/home/Safe.vue'
// import HomeFloatbar from '~/components/page/home/Floatbar.vue'
export default {
  components: {
    HomeSwiper, HomeTechnology , HomeLowprice, HomeFlexiblecharge// , HomeBusinessphilosophy, HomePaperlessprocesses,HomeTeamfounders, HomeQA, HomeSafe, HomeFloatbar
  },
  data () {
    return {
      articleList: [],
      page_index: 1,
      page_size: 10,
      laypagePrev: 'layui-laypage-prev layui-disabled',
      laypageNext: 'layui-laypage-next',
      pageData: {
        maxPageCount: 1,
        currIndex: 1,
        currIndex_refresh: 1,
        page_size: 10,
        page_index: 1,
        laypagePrev: 'layui-laypage-prev layui-disabled',
        laypageNext: 'layui-laypage-next'
      },
      article: [],
      postData: {},
      title: '',
      summary: '',
      articleListShow: true,
      articleDetailShow: false
    }
  },
  async asyncData ({ store, error }) {
    var self = this
    var date = new Date()
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var D = date.getDate().toString() + ' '
    console.log(D, 'date.getDate()')
    if (D < 10) {
      D = '0' + D
    }
    var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
    console.log(Time, 'Time')
    var hashTime = md5(Time).toUpperCase()
    //self.pageData.key = hashTime
    const param = {
      maxPageCount: 1,
      currIndex: 1,
      currIndex_refresh: 1,
      page_size: 10,
      page_index: 1,
      laypagePrev: 'layui-laypage-prev layui-disabled',
      laypageNext: 'layui-laypage-next',
      key:hashTime
    }
    console.log(param,'param')
    // const [ res ] = await Promise.all([
    //   store.dispatch('QueryWmArticleList', param)
    // ])
    //  console.log(res,'paramresresresres')
    // return {
    //   lists: res
    // }
  }
}
</script>
<style>
</style>

