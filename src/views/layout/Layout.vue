<template>
  <div class="layout-wrapper" :class="isCollapse ? 'is-collapse' : ''">
    <!-- 头部 -->
    <main-header @sider-collapse="siderCollapse"></main-header>

    <!-- 左侧菜单栏 -->
    <main-sidebar :collapse="isCollapse"></main-sidebar>

    <!-- 内容主体 -->
    <main-content></main-content>

    <!-- 尾部 -->
    <main-footer></main-footer>

  </div>
</template>

<script>

import MainHeader from '@/components/MainHeader';
import MainSidebar from '@/components/MainSidebar';
import MainContent from '@/components/MainContent';
import MainFooter from '@/components/MainFooter';

export default {
  name: 'Layout',
  components: {
    MainHeader,
    MainSidebar,
    MainContent,
    MainFooter
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    siderCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-wrapper {
  position: relative;
  min-height: 100%;
}
</style>
