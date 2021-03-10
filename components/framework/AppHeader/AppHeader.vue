<template>
  <div class="app-header-wrap">
    <div class="z-container">
      <div class="app-header">
        <nuxt-link to="/" class="app-header-brand">
         <logo :h="35" />
        </nuxt-link>
        <app-menu theme="black"/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/base/Logo/Logo'
import AppMenu from '@/components/framework/AppMenu/AppMenu'

export default {
  name: 'AppHeader',
  components: {
     Logo,
    AppMenu
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.app-header-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid @colorBlue;
  background-color: rgba(7, 6, 0, 1);
  color: @colorTextTitle;
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @heightHeader;
  }
}
@media only screen and (max-width: @breakpoints-lg) {
  .app-header-wrap {
    background-color: rgba(255, 255, 255, 0.95);
    
  }
}
</style>
