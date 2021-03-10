<template>
   <section class="figer-wrapper pb-5  pt-5 bg-f8f6f9" style="overflow:hidden" >
      <div class="articleList" v-if="articleListShow==true">
          <div class="title mb-5 mt-5 container text-center title-hr">
              <h3>新闻资讯</h3>
              <h4 class="text-1e6ce8 ">News</h4>
          </div>
          <div class="container" >
              <div  class="row justify-content-center" style="overflow: hidden;min-height:600px"  >
                  <div class="partner-module partner-module-intro">
                      <div class="partner-inner">
                          <div id="j-partners-list" class="partner-2-intro-card-list">
                              <nuxt-link :to="{name: 'news-newsView-id',params:{id:item.article_id}}"  target="_blank"  v-for="(item,index) in articleList" v-bind:key='index'>
                                <div  class="partner-2-intro-card ">
                                      <div class="partner-2-intro-card-object">
                                          <img :src="item.picture_url" alt="logo" class="partner-2-intro-card-logo">
                                      </div>
                                      <div class="partner-2-intro-card-cont">
                                          <div class="partner-2-intro-card-hd">
                                              <h3 class="partner-2-intro-card-title">
                                                  {{item.title}}
                                              </h3>
                                          </div>
                                          <div class="partner-2-intro-card-m-toggle">查看更多</div>
                                          <div class="partner-2-intro-card-main mobile-hidden">
                                              <div class="partner-2-intro-card-detail">
                                                  <div class="partner-2-intro-card-infos">
                                                      <span class="partner-2-intro-card-info"> {{item.publish_time }}</span>
                                                  </div>
                                                  <div class="partner-2-intro-card-text"> {{item.summary}}</div>
                                              </div>
                                          </div>
                                      </div>
                                </div>
                              </nuxt-link>
                          </div>
                      </div>
                      <div v-show="pageData.maxPageCount > 1" class="text-center">
                          <div id="layui-laypage-2" class="layui-box layui-laypage layui-laypage-default">
                              <span class="layui-laypage-skip">总<span class="layui-laypage-skip laypage-num">{{pageData.maxPageCount}}</span>页 当前</span>
                              <a href="javascript:;" data-page="1" v-bind:class="pageData.laypagePrev"> <i class="iconfont iconzyojiantou1" v-on:click="queryArticleList('s')"></i></a>
                              <a href="javascript:;" data-page="3" class="laypage-centernum">{{pageData.currIndex}}</a>
                              <a href="javascript:;" data-page="3" v-bind:class="pageData.laypageNext"><i class="iconfont iconzyojiantou" v-on:click="queryArticleList('p')"></i></a>
                              <span class="layui-laypage-skip">页 到第<input type="text" min="1" value="1" v-model.trim="pageData.currIndex_refresh" class="layui-input">页<button type="button" class="layui-laypage-btn" v-on:click="queryArticleList('r')">确定</button></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import md5 from 'js-md5'
import axios from 'axios'
import { Loading } from 'element-ui'
import { mapGetters } from 'vuex'
export default {
  name: 'Main',
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
  computed: {
    ...mapGetters(['categoryList', 'categoryIdByValue'])
  },
  async asyncData({ app }) {
    const params = {
      page: 1,
      limit: 10,
      category: ''
    }
    console.log(this.data.pageData,'this.data.pageData')
    const res = await app.$myApi.article.index(params)
    return {
      blogList: res.result.docs,
      pageTotal: res.result.pages,
      itemTotal: res.result.total
    }
  },
  async fetch({ store }) {
    await store.dispatch('getCategoryList')
  },
  created: function () {
  },
  mounted () {
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
    self.pageData.key = hashTime
    //self.queryArticleList()
  },
  methods: {
    // queryArticleList: function (flag) {
    //   var self = this
    //   self.getPagerData(flag, self.pageData)
    //   let loadingInstance = Loading.service()
    //   console.log(self.pageData, 'self.pageData')
    //   axios.post(url.QueryWmArticleList, self.pageData).then(res => {
    //     if (res.data.success === true) {
    //       console.log(res.data, '查询文章列表')
    //       self.articleList = res.data.articleList
    //       self.pageData.maxPageCount = res.data.maxCount
    //       console.log(self.pageData.maxPageCount, 'self.pageData.maxPageCount ')
    //     } else {
    //       self.articleList = []
    //       self.pageData.maxPageCount = 0
    //       self.pageData.page_size = 0
    //     }
    //     console.log(res.data, 'res.data')
    //     loadingInstance.close()
    //   }).catch(err => {
    //     console.log(err, 'error')
    //     this.$alert(err)
    //     self.articleList = []
    //     self.pageData.maxPageCount = 0
    //     self.pageData.page_size = 0
    //     loadingInstance.close()
    //     // error callback
    //   })
    // },
    // getPagerData: function (flag, pageData) {
    //   if (flag === undefined) {
    //     flag = 'a'
    //   }
    //   var d_currIndex = parseInt(pageData.currIndex)
    //   var d_maxPageCount = parseInt(pageData.maxPageCount)

    //   if (flag === 's') {
    //     d_currIndex = d_currIndex - 1
    //     if (d_currIndex <= 0) {
    //       d_currIndex = 1
    //     }
    //   }
    //   else if (flag === 'p') {
    //     d_currIndex = d_currIndex + 1
    //     if (d_currIndex > d_maxPageCount) {
    //       d_currIndex = d_maxPageCount
    //     }
    //   }
    //   else if (flag === 'r') {
    //     d_currIndex = pageData.currIndex_refresh
    //     if (d_currIndex > d_maxPageCount) {
    //       d_currIndex = d_maxPageCount
    //       pageData.currIndex_refresh = d_currIndex
    //     }
    //   }
    //   if (d_currIndex === 1) {
    //     pageData.laypagePrev = 'layui-laypage-prev layui-disabled'
    //   } else {
    //     pageData.laypagePrev = 'layui-laypage-prev'
    //     pageData.currIndex = d_currIndex
    //     pageData.page_index = (d_currIndex)
    //   }
    //   if (flag !== 'a') {
    //     if (d_currIndex === d_maxPageCount) {
    //       pageData.laypageNext = 'layui-laypage-next layui-disabled'
    //     } else {
    //       pageData.laypageNext = 'layui-laypage-next'
    //       pageData.currIndex = d_currIndex
    //       pageData.page_index = (d_currIndex)
    //     }
    //   }
    // }
  }
}
</script>
<style scoped>
a:hover{
  text-decoration: none;
}
a:hover h3{
  color: #666;
}
a:hover .partner-2-intro-card-info,a:hover .partner-2-intro-card-text{
  color: #777;
}
.clear::after {
  display: block;
  clear: both;
  content: "";
}
.container {
  overflow: hidden;
}
.main {
  margin-top: 80px;
  position: relative;
  margin-left: 30px;
}
.main-inner {
  background: #fff;
  padding: 0 40px;
  float: left;
  max-width: 50%;
  position: absolute;
  right: 690px;
}
@media screen and (max-width: 1360px) {
  .main-inner {
    right: 600px;
  }
  .box {
    margin-right: 0 !important;
  }
}
@media screen and (max-width: 1200px) {
  .main-inner {
    right: 20%;
  }
  .box {
    opacity: 0;
  }
}
@media screen and (max-width: 756px) {
  .main {
    height: 600px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 5%;
  }
  .box {
    display: none;
  }
}

.main h2 {
  font-size: 36px;
  font-weight: bolder;
  /* margin-block-start: 0.83em;
  margin-block-end: 0.83em; */
  margin-top: 0.83rem;
  margin-bottom: 0.83rem;
}
.main p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
}
.box {
  width: 450px;
  height: 490px;
  float: right;
  margin-right: 20%;
  margin-top: -20px;
}
.box img {
  width: 450px;
  height: 490px;
}
@media screen and (max-width: 496px) {
  .main {
    margin-top: 30px;
    padding: 10%;
    height: 700px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
}

</style>
