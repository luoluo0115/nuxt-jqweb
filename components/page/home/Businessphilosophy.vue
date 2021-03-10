<template>
   <section class="price-wrapper bg-img-black p-5 mt-5">
        <div class="container ">
            <div class=" tech-main">
                <div class="row  pt-5 pb-5 ">
                    <div class="col-md-6 col-xs-6 tech-right ">
                        <img :src="ideaImg" class="img-tech-right" />
                    </div>
                    <div class="col-md-6 col-xs-6  text-white">
                        <div class="title mb-5 text-right text-white">
                            <h3>机巧理念</h3>
                            <h4 class="">Business Philosophy</h4>
                        </div>
                        <p class="pl-3"> 我们无意改变代理记账行业，我们只希望切实解决客户的需求。 </p>
                        <p class="pl-3"> 简单的需求就要有简单实惠的解决方案。 </p>
                        <p class="pl-3"> 机巧科技通过最尖端的信息技术， </p>
                        <p class="pl-3"> 为客户提供一个最便宜的解决基本需求的SaaS工具。 </p>
                        <p class="pl-3"> 倾其蕴藏的可能性，机巧科技也将不断探索，确保技术和服务模式持续进步更 </p>
                        <p class="pl-3"> 新，为客户提供更好更合适的产品。 </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
  name: 'Businessphilosophy',
  data () {
    return {
      ideaImg: require('~/assets/image/img-idea-left.png')
    }
  },
  mounted () {
  }
}
</script>
<style scoped>

</style>
