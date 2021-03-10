<template>
    <section>
        <div class="Footerfrombtn"  @click="Footerfrombtn" v-show="!showFooterFrom">
            <div class="word">预约演示 <i class="iconfont iconzyojiantou"></i></div>
        </div>
        <transition name="myfooter">
          <div class="footer-from"  :class="active" v-if="showFooterFrom">
              <div class="z-container">
                <el-row>
                  <el-col :span="8">
                    <el-image
                    :src="footerLeftImg"
                    fit="contain" alt="代理记账" style="width: 250px; height: 50px" class="img-footer-left"></el-image>
                  </el-col>
                  <el-col :span="14">  
                    <el-form :inline="true" class="demo-form-inline img-footer-left">
                      <el-form-item >
                        <el-input v-model="name" id="indexName" placeholder="请输入您的姓名"></el-input>
                      </el-form-item>
                      <el-form-item >
                        <el-input v-model="telephone" id="indexTelephone" placeholder="请输入您的手机号"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="submitForm($event)">立即免费预约</el-button>
                        <el-button type="primary" @click="onbaiduline()" >在线咨询</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                  <el-col :span="2">
                    <div class="form-guanbi"  @click="closeFooterfrom">
                        <i class="iconfont icontubiao-"></i>
                    </div>
                  </el-col>
                </el-row>
                  <!-- <div class="row">
                      <div class="col-md-3  col-sm-2 col-3">
                        <b-img :src="footerLeftImg" class="img-footer-left" fluid alt="代理记账"></b-img>
                      </div>
                      <div class="col-md-8 col-sm-9 center-wrapper col-8">
                          <form class="form-inline">
                              <div class="form-group">
                                  <input type="text" class="form-control" value="" v-model="name" id="indexName" placeholder="请输入您的姓名">
                                  <span class="iconfont icon-Userpersonavtar  form-control-feedback" aria-hidden="true"></span>
                              </div>
                              <div class="form-group">
                                  <input type="text" class="form-control" value="" v-model="telephone" id="indexTelephone" placeholder="请输入您的手机号">
                                  <span class="iconfont icon-phone form-control-feedback" aria-hidden="true"></span>
                              </div>

                              <button type="button" class="btn btn-default index-submit-userinfo" id="userinfo-btm-from" @click="submitForm($event)">立即免费预约</button>
                              <button type="button" class="btn btn-default index-submit-userinfo" @click="onbaiduline()" >在线咨询</button>
                          </form>
                      </div>
                      <div class="col-md-1  col-sm-1  col-1">
                          <div class="form-guanbi"  @click="closeFooterfrom">
                              <i class="iconfont icontubiao-"></i>
                          </div>
                      </div>
                  </div> -->
              </div>
          </div>
        </transition>
    </section>
</template>
<script>
import md5 from 'js-md5'
import axios from 'axios'
import url from '~/plugins/api'
import { Loading } from 'element-ui'
export default {
  name: 'Footerfrom',
  data () {
    return {
      downmenuShow: false,
      navshow: true,
      height: 0,
      timer: null,
      name: '',
      telephone: '',
      showFooterFrom: true,
      footerLeftImg: require('~/assets/image/qi_04.png'),
      active: false
     
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
  },
  methods: {
    submitForm: function (event) {
      let self = this
      var name = self.name
      var telephone = encodeURIComponent(self.telephone)
      console.log(name,'name')
      console.log(telephone,'telephone')

      if (name.length <= 0) {
        this.$alert("<div style='font-size:18px;text-align:center'>请输入正确的姓名！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        return
      }
      if (telephone.length <= 0) {
        this.$alert("<div style='font-size:18px;text-align:center'>请输入您的电话！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        return
      }
      if (telephone.length < 8) {
        this.$alert("<div style='font-size:18px;text-align:center'>请输入正确的电话或者手机号码！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        return
      }
      var date = new Date()
      var Y = date.getFullYear()
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
      var D = date.getDate() + ' '
      var Time = ('COMMON_' + Y + '_' + M + '_' + D).replace(/\s+/g, '')
      var hashTime = md5(Time).toUpperCase()
      var postData = {
        'key': hashTime,
        'request_category': '上海代理公司',
        'request_name': name,
        'request_phone': telephone,
        'request_data': '机巧网站底部表单',
        'flag': 'F'
      }
      let loadingInstance = Loading.service()
      axios.post(url.PostMarktingForm, postData).then(res => {
        this.$alert("<div style='font-size:14px;text-align:center'>亲，您已预约成功~您想知道的注册流程和精准报价,我们会尽快和您回电详谈！</div>", {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false
        })
        loadingInstance.close()
        console.log(res.data, 'res.data')
      }).catch(err => {
        console.log(err, 'error')
        this.$alert(err)
        loadingInstance.close()
        // error callback
      })
    },
    closeFooterfrom () { this.showFooterFrom = false;  this.active = true},
    onbaiduline () {
      window.open('https://ada.baidu.com/imlp/?imid=4be88d21549260a688ebbfdb8db9cdb2')
    },
    // 底部栏交互
    // 点小的显示大的
    Footerfrombtn: function () {
      this.showFooterFrom = !this.showFooterFrom
    }
  }

}
</script>
<style scoped>
.Footerfrombtn{
  position: fixed;
    left: 0;
    bottom: 50px;
    z-index: 991;
    cursor: pointer;
    width: 114px;
    height: 70px;
    font-size: 15px;
    color: #fff;
    line-height: 20px;
    border-radius: 0 35px 35px 0;
    background: -webkit-gradient(linear, left top, left bottom, from(#1e63e8), to(#4680f3));
    background: linear-gradient(to left, #1e63e8, #4680f3);
    -webkit-filter: brightness(1.2);
    filter: brightness(1.2);
}
.Footerfrombtn .word {
  line-height: 40px;
  padding: 16px 0 0 12px;
  letter-spacing: 1px;
  background-size: 8px 17px;
  font-size: 18px;
}
.active{
  position:relative;
  animation:mymove 5s infinite;
  -webkit-animation:mymove 5s infinite;
  transition: all 1s ease-in;
   width: 0px !important;
}
/* 给过渡的name加样式 */

.myfooter-leave-active,
.myfooter-enter-active {
  transition: all 0.5s ease;
}

.myfooter-leave-active,
.myfooter-enter {
  width: 0px !important;
}

.myfooter-from-leave,
.myfooter-from-enter-active {
  width: 100%;
}
</style>
