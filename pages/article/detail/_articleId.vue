<template>
  <div class="z-container">
    <bread-menu :breadList="breadList" />
    <section  id="div_content_master" class="figer-wrapper main " style="overflow:hidden;clear: both;">
        <div class="title mb-5 mt-3 text-center">
            <h3 class="title">{{articleData.title}}</h3>
            <h6 class="text-right text-999">{{articleData.publish_time}}</h6>
        </div>
        <div class="container">
            <p v-html="articleData.content"></p>
        </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BreadMenu from '~/components/common/BreadMenu'
import axios from 'axios'
import md5 from 'js-md5'
export default {
  name: 'ArticleDetail',
  components: {
    BreadMenu,
  },
  data() {
    return {
      isLikeLoading: false,
      isLoading: false,
      isCommentsListLoading: false,
      blogResult: {},
      commentsList: [],
      page: 1,
      limit: 10,
      pageTotal: 0,
      totalEle: 0,
      breadList:[{
        link:'/article',
        title:'新闻资讯'
      },{
        link:'',
        title:'资讯详情'
      }]
    }
  },
  async asyncData({ app, params }) {
    console.log(params,'paramsparamsparamsparamsparams')
    // const sendParams = {
    //   id: params.articleId
    // }
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
    const postData = {
        article_id:  params.articleId,
        key:hashTime
    }
    return axios.post('https://qjz.jiqiao.tech/api/JQCommonAccount/QueryWmArticleByID', postData)
    .then(res => { 
      console.log(res,'res')
      return {articleData: res.data.article[0]} 
    }) 
    // const res = await app.$myApi.blogs.show(sendParams)
    // return {
    //   blogResult: res.result || {}
    // }
  },
  head() {
    return {
      title: this.articleData.title + '上海机巧科技有限公司',
      meta: [{ name: 'keywords', content: this.articleData.key_words }]
    }
  }
  
}
</script>
<style lang="less">
.main{
  padding: 30px 0;
  .title {
    font-size: 28px;
    color: @colorText333;
    font-weight: bolder;
    /* margin-block-start: 0.83em;
    margin-block-end: 0.83em; */
    margin-top: 0.83rem;
    margin-bottom: 0.83rem;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  img{
    width: 100%;
  }
}

</style>
