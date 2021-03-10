<template>
  <div>
    <div class="z-container">
      <bread-menu :breadList="breadList" />
      <div class="z-row blog-mobile">
        <div class="z-col-md-60 z-col-xl-60">
          <!-- <nuxt-link :to="{name: 'news-newsView-id',params:{id:item.article_id}}"  target="_blank"  v-for="(item,index) in articleList" v-bind:key='index'>
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
          </nuxt-link> -->
          <template v-if="articleData.length > 0">
            <topic-item  v-for="(item,index) in articleData" :key='index' :topic="item" ></topic-item>
          </template>
          <!-- <card-no-data v-else style="height: 300px;" />
          <pagenation v-if="blogList && blogList.length > 0 && itemTotal > 10" :all="pageTotal" :cur="page" :callback="changePage" style="margin-top: 20px;" /> -->
        </div>
        <!-- <div class="list-side z-col-md-18 z-col-xl-15">
          <card class="search-wrap">
            <search-blog @on-search="handleSearch" />
          </card>
          <card-category :categoryList="categoryList" />
        </div> -->
      </div>
    </div>
     <footer-from />
  </div>

</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'
import FooterFrom from '~/components/common/FooterFrom'
import BreadMenu from '~/components/common/BreadMenu'
import TopicItem from '~/components/kit/TopicItem/TopicItem'
// import CardNoData from '~/components/kit/CardNoData/CardNoData'
// import SearchBlog from '~/components/kit/SearchBlog/SearchBlog'
// import CardCategory from '~/components/kit/CardCategory/CardCategory'
// import Pagenation from '~/components/base/Pagenation/Pagenation'
import { mapGetters } from 'vuex'
export default {
  name: 'ArticleIndex',
  components: {
    FooterFrom,
    BreadMenu,
    TopicItem,
    // CardNoData,
    // SearchBlog,
    // Pagenation,
    // CardCategory
  },
  data() {
    return {
      page: 1,
      limit: 10,
      pageTotal: 0,
      itemTotal: 0,
      blogList: [],
      isLoading: false,
      articleData:'',
      breadList:[{
        link:'/article',
        title:'新闻资讯'
      }]
    }
  },
  async asyncData({ app }) {
     var self = this
    var date = new Date()
    var Y = date.getFullYear()
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var D = date.getDate().toString() + ' '
    if (D < 10) {
      D = '0' + D
    }
    var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
    var hashTime = md5(Time).toUpperCase()
    const params = {
        maxPageCount: 1,
        currIndex: 1,
        currIndex_refresh: 1,
        page_size: 10,
        page_index: 1,
        laypagePrev: 'layui-laypage-prev layui-disabled',
        laypageNext: 'layui-laypage-next',
        key:hashTime
    }
      //const res = await app.$myApi.JQCommonAccount.queryWmArticleList(params)
     //console.log(res,'app.$myApiapp.$myApiapp.$myApi')
     return axios.post('https://qjz.jiqiao.tech/api/JQCommonAccount/QueryWmArticleList', params)
      .then(res => { 
        return {articleData: res.data.articleList} 
      })    
  },
  async fetch({ store }) {
    
    //await store.dispatch('getArticleList')
  },
  // computed: {
  //   ...mapGetters(['articleData'])
  // },
  

  methods: {
   
  },
  head() {
    return {
      title: '代理记账公司新闻资讯-上海机巧科技有限公司',
      meta: [
        { name: 'keywords', content: '上海代理记账_财税法规' },
        { name: 'description', content: '财税法规、代理记账行业动态、财税代办新规定等相关内容,让企业财务人员及时了解财税法规。' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
body{
  background-color: @colorBgBody;
}
.list-side {
  position: sticky;
  top: @heightHeader + 20;
}
.z-card.search-wrap {
  background-image: @color;
}
@media (min-width: @breakpoints-xs) and (max-width: @breakpoints-md) {
  .blog-mobile {
    display: flex;
    flex-direction: column-reverse;
    .list-side {
      position: relative;
      top: 0;
      margin-bottom: 20px;
    }
  }
}
</style>
