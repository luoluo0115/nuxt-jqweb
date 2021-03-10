<template>
   <section class="tech-wrapper  pt-5 pb-5">
        <div class="title mb-5 container">
            <h3>其他服务</h3>
            <h4 class="text-1e6ce8 ">More Enterprise Services</h4>
        </div>
        <div class="bg-f8f6f9" style="overflow:hidden;clear:both">
            <div class="container tech-main pt-5 pb-5">
                <div class="row  p-5">
                    <div class="col-md-6 col-xs-6  text-333">
                        <div class="mt-3">
                            <span class="pt-1 pb-1 pl-md-3 pr-md-3  pl-sm-1 pr-sm-1 bg-044fff text-white">工商服务</span>
                            <p class="mt-2">为企业提供公司注册、工商变更、公司迁移等一站式服务产品，全方位满足企业的工商需求，可做到一对一及时响应、服务进程及时跟进。</p>
                        </div>
                        <div class="mt-3">
                            <span class="pt-1 pb-1 pl-md-3 pr-md-3  pl-sm-1 pr-sm-1 bg-044fff text-white">知产资质</span>
                            <p class="mt-2">选机巧，省心又放心！机巧作为行业内专业的资质代办公司，办证速度快，价格透明合理，不成功不收费。</p>
                        </div>
                        <div class="mt-3">
                            <span class="pt-1 pb-1 pl-md-3 pr-md-3  pl-sm-1 pr-sm-1 bg-044fff text-white">人事服务</span>
                            <p class="mt-2">人事服务找机巧，专业人事管理团队提供一体化人事服务，帮助企业从事务性工作中解脱出来，从而降低企业人力资源管理成本。</p>
                        </div>
                        <div class="mt-3">
                            <span class="pt-1 pb-1 pl-md-3 pr-md-3  pl-sm-1 pr-sm-1 bg-044fff text-white">财税服务</span>
                            <p class="mt-2">机巧拥有百人专业财务团队，收费透明合理，为企业定制专属财税筹划方案，助力企业稳健发展。</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-6 tech-right ">
                        <div class="holderCircle">
                            <div class="dotCircle" style="transform: rotate(0deg); transition: all 2s ease 0s;">
                                <span class="itemDot itemDot1" data-tab="1" style="left: 410px; top: 210px; transform: rotate(0deg); transition: all 1s ease 0s;">
                                </span>
                                <span class="itemDot itemDot2" data-tab="2" style="left: 372px; top: 328px; transform: rotate(90deg); transition: all 1s ease 0s;">
                                </span>
                                <span class="itemDot itemDot3 active" data-tab="3" style="left: 272px; top: 400px; transform: rotate(180deg); transition: all 1s ease 0s;">
                                </span>
                                <span class="itemDot itemDot4" data-tab="4" style="left: 148px; top: 400px; transform: rotate(270deg); transition: all 1s ease 0s;">
                                </span>
                            </div>
                            <div class="contentCircle">
                                <div class="CirItem CirItem1 active">
                                </div>
                                <div class="CirItem CirItem2">
                                </div>
                                <div class="CirItem CirItem3">
                                </div>
                                <div class="CirItem CirItem4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import $ from 'jquery'
import '~/assets/css/circle.css'
export default{
  name: 'Services',
  data () {
    return {
    }
  },
  mounted () {
    var radius = 200
    var fields = $('.itemDot')
    var container = $('.dotCircle')
    var width = container.width()
    radius = width / 2.5
    var height = container.height()
    var angle = 0
    var step = (2 * Math.PI) / fields.length
    fields.each(function () {
      var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2)
      var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2)
      if (window.console) {
        console.log($(this).text(), x, y)
      }
      $(this).css({left: x + 'px', top: y + 'px'})
      angle += step
    })
    $('.itemDot').click(function () {
      var dataTab = $(this).data('tab')
      $('.itemDot').removeClass('active')
      $(this).addClass('active')
      $('.CirItem').removeClass('active')
      $('.CirItem' + dataTab).addClass('active')
      var i = dataTab
      console.log(i, 'i')
      $('.dotCircle').css({
        'transform': 'rotate(' + (360 - (i - 1) * 90) + 'deg)',
        'transition': '2s'})
      $('.itemDot').css({
        'transform': 'rotate(' + ((i - 1) * 90) + 'deg)',
        'transition': '1s'})
      $('.itemDot1').css({
        'transform': 'rotate(' + 0 + 'deg)',
        'transition': '1s'
      })
      $('.itemDot2').css({
        'transform': 'rotate(' + 90 + 'deg)',
        'transition': '1s'
      })
      $('.itemDot3').css({
        'transform': 'rotate(' + 180 + 'deg)',
        'transition': '1s'
      })
      $('.itemDot4').css({
        'transform': 'rotate(' + 270 + 'deg)',
        'transition': '1s'
      })
    })
  }
}
</script>
