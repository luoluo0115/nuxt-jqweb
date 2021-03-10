<template>
  <div  class="partner-2-intro-card ">
    <router-link :to="{ path: `/article/detail/${topic.article_id}` }" class="head-title" tag="h1">
     <div class="partner-2-intro-card-object">
          <img :src="topic.picture_url" alt="logo" class="partner-2-intro-card-logo">
      </div>
      <div class="partner-2-intro-card-cont">
          <div class="partner-2-intro-card-hd">
              <h3 class="partner-2-intro-card-title">
                  {{topic.title}}
              </h3>
          </div>
          <div class="partner-2-intro-card-m-toggle">查看更多</div>
          <div class="partner-2-intro-card-main mobile-hidden">
              <div class="partner-2-intro-card-detail">
                  <div class="partner-2-intro-card-infos">
                      <span class="partner-2-intro-card-info"> {{topic.publish_time }}</span>
                  </div>
                  <div class="partner-2-intro-card-text"> {{topic.summary}}</div>
              </div>
          </div>
      </div>
    </router-link>
</div>
</template>

<script>
import Icon from '@/components/base/Icon/Icon'
export default {
  name: 'TopicItem',
  components: {
    Icon,
  },
  props: {
    topic: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  computed: {
    // parentPath() {
    //   return this.$route.path.split('/')[1]
    // },
    // firstParagraphIndex() {
    //   let index = this.topic.content.indexOf('\n', 100)
    //   if (index === -1) {
    //     index = this.topic.content.indexOf('\n', 0)
    //   }
    //   return index
    // },
    // firstParagraph() {
    //   return this.topic.content.substring(0, this.firstParagraphIndex)
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
