<template>
    <article class="fixedbar">
        <ul>
            <li class="contact-us">
                <a target="_blank" href="http://qjz.jiqiao.tech" rel='nofollow' class="item">
                    <i class="iconfont iconshangchuan"></i>
                    上传票据
                </a>
            </li>
            <li class="contact-us business-consulting ">
                <div class="item">
                    <i class="iconfont icongongzhonghao"></i>
                    公众号
                </div>
                <div class="wechart-bubble">
                    <img src="~/assets/image/img-wechart-01.png">
                </div>
            </li>
            <li class="business-consulting contact-us ">
                <i class="iconfont icondianhua1"></i>
                联系电话
                <div class="c-bubble">
                    <div class="c-bubble-inner">
                        <p class="qr-txt">13002193888</p>
                    </div>
                </div>
            </li>
            <li class="scroll-top" id="btn_top" @click="backtop">
                <i class="iconfont icontop"></i>
            </li>
        </ul>
    </article>
</template>
<script>

export default {
  name: 'Floatbar',
  data () {
    return {
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showbtn, true)
  },
  methods: {
    // 显示回到顶部按钮
    showbtn () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
    },
    /**
        * 回到顶部功能实现过程：
        * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
        * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
        * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
        * 4. 最后记得在移动到顶部时，清除定时器
        */
    backtop () {
      var timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>
<style scoped>

</style>
