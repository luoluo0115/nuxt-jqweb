<template>
  <div>
    <div class="gray bottom-main">
      <div class="z-container">
          <div class="z-row list text-center">
              <div class="z-col-md-15 z-col-xl-15 item">
                  <span><i class="iconfont iconrenyuan"></i></span>
                  <div class="right">
                      <h4>全程服务</h4>
                  </div>
              </div>
              <div class="z-col-md-15 z-col-xl-15 item">
                  <span><i class="iconfont iconfuwu"></i></span>
                  <div class="right">
                      <h4>品质保障</h4>
                  </div>
              </div>
              <div class="z-col-md-15 z-col-xl-15 item">
                  <span><i class="iconfont iconicon-test1"></i></span>
                  <div class="right">
                      <h4>价格透明</h4>
                  </div>
              </div>
              <div class="z-col-md-15 z-col-xl-15 item">
                  <span><i class="iconfont iconxinxipingtaibaomi2"></i></span>
                  <div class="right">
                      <h4>信息保密</h4>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
    <div class="app-footer in-foooter">
      <el-row class="z-container">
        <el-col :span="10">
          <div class="z-row  list ">
                    <div class="z-col-md-20 z-col-xl-20 item">
                        <a href="###" rel='nofollow' class="d-block">注册公司办理</a>
                        <a href="###" rel='nofollow' class="d-block">智能记账报税</a>
                        <a href="###" rel='nofollow' class="d-block">银行开户办理</a>
                        <a href="###" rel='nofollow' class="d-block">委托开票服务</a>
                    </div>
                    <div class="z-col-md-20 z-col-xl-20 item">
                        <a href="###" rel='nofollow' class="d-block">社保公积金开户</a>
                        <a href="###" rel='nofollow' class="d-block">工商变更服务</a>
                        <a href="###" rel='nofollow' class="d-block">许可资质办理</a>
                        <a href="###" rel='nofollow' class="d-block">商标设计注册</a>
                    </div>
                    <div class="z-col-md-20 z-col-xl-20 item">
                        <router-link tag="a" to="/product"  class="d-block">
                          机巧简介
                        </router-link>
                        <router-link tag="a" to="/problem" class="d-block" >
                          常见问题
                        </router-link>
                        <router-link tag="a" to="/about" class="d-block" >
                          联系我们
                        </router-link>
                    </div>
                </div>
        </el-col>
        <el-col :span="8">
          <p class=" ">
              联系我们
          </p>
          <p class="">
              咨询电话：130-0219-3888
          </p>
          <p class="">
              客服热线：021-5450-5858
          </p>
          <p class="">
              地址：上海徐汇区建国西路285号6楼
          </p>
          <div class="">
              <div class="d-inline-block itemIcon ">
                  <i class="iconfont iconqietu08"></i>
                  <span class="iconWechart-show">
                      <img src="~/assets/image/weixingJQLOGO.png"  alt='代理记账'/>
                  </span>
              </div>
              <div class="d-inline-block itemIcon">
                  <a href="https://weibo.com/7475987313/manage" target="_blank"><i class="iconfont icon-- "></i></a>
              </div>
              <div class="d-inline-block itemIcon ">
                  <i class="iconfont icondianhua"></i>
                  <span class="iconPhone-show">
                      130-0219-3888
                  </span>
              </div>
          </div>
        </el-col>
        <el-col :span="6" >
            <div class="wechart-bottom text-center ">
              <el-row >
                <el-col :span="12" >
                   <img :src="weixingJQLOGOImg" alt='代理记账' class="wechart-icon d-block"/>
                  <span class="d-block">· 创业技巧 ·</span>
                </el-col>
                <el-col :span="12"  >
                    <img :src="wechartImg"  alt='代理记账' class="wechart-icon d-block" />
                    <span class="d-block">· 巧记账小程序 ·</span>
                </el-col>
              </el-row>
            </div>
        </el-col>
      </el-row>
      <div class="in-foooter-bottom text-center">
        <a href="https://www.beian.miit.gov.cn"  rel='nofollow' target="_blank" class="colorTextWhite" >版权所有 © 2019 - 2020 上海机巧科技有限公司   沪ICP备：20018413号-1</a>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'AppFooter',
  data (){
     return {
      showFooterFrom: true,
      marginb: 'mb',
      weixingJQLOGOImg: require('~/assets/image/weixingJQLOGO.png'),
      wechartImg: require('~/assets/image/img-jq-wechart.jpg')
    }
  },

}
</script>

<style lang="less" scoped>
@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}
.bottom-main {
  padding: 20px;
}
.app-footer {
  position: relative;
  width: 100%;
  background-color: #151515;
  color: @colorTextWhite;
  .app-footer-cont {
    margin: 0 auto;
    text-align: center;
    .social {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: @colorTextWhite;
        transition: all 0.3s;
        width: 36px;
        height: 36px;
        margin: 0 30px;
        border-radius: 50%;
        &:after {
          z-index: 1;
          content: '';
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          border-radius: 100%;
          background: transparent;
          border: 1px solid @colorTextWhite;
          -webkit-animation: pulse 2s infinite;
          animation: pulse 2s infinite;
        }
        &:hover {
          &:after {
            border-color: @colorFooterText;
          }
          color: @colorFooterText;
        }
        i {
          font-size: 24px;
          line-height: 1;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .contact {
      .cat {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        i {
          display: inline-block;
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
    .copyright {
      border-top: 1px solid @colorTextContent;
      line-height: 40px;
      text-align: center;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 400;
      a {
        &:hover {
          color: @colorTextLight;
        }
      }
      .gwab a {
        img {
          vertical-align: sub;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
@media only screen and (min-width: @containerMaxWidth-xl) {
  .app-footer {
    padding-top: 50px;
    .app-footer-cont {
      width: 1280px;
      .social {
        margin-bottom: 40px;
      }
      .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20%;
        margin-bottom: 30px;
      }
    }
  }
}
@media only screen and (min-width: @containerMaxWidth-md) and (max-width: @containerMaxWidth-xl) {
  .app-footer {
    padding-top: 50px;
    .app-footer-cont {
      width: 100%;
      .social {
        margin-bottom: 40px;
      }
      .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10%;
        margin-bottom: 30px;
      }
    }
  }
}
@media only screen and (max-width: @containerMaxWidth-md) {
  .app-footer {
    padding-top: 20px;
    .app-footer-cont {
      width: 100%;
      .social {
        margin-bottom: 20px;
      }
      .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 10px;
        overflow: hidden;
        width: 100%;
        .cat {
          line-height: 24px;
        }
      }
      .copyright {
        line-height: 18px;
        padding: 7px 40px;
      }
    }
  }
}
</style>
