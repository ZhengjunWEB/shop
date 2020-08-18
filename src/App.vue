<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <Tabbar>
      <Tabitem  path="/home">
        <div slot="tab_img" class="iconfont">&#xe674;</div>
        <p slot="tab_text">首页</p>
      </Tabitem>
      <Tabitem path="/category">
        <div slot="tab_img" class="iconfont" >&#xe7f9;</div>
        <p slot="tab_text">分类</p>
      </Tabitem>
      <Tabitem path="/cart">
        <div slot="tab_img" class="iconfont" >&#xe636;</div>
        <p slot="tab_text">购物车</p>
      </Tabitem>
      <Tabitem  path="/user">
        <div slot="tab_img" class="iconfont">&#xe682;</div>
        <p slot="tab_text">我的</p>
      </Tabitem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/common/tabbar'
  import Tabitem from '@/components/content/tabbaritem'
  export default {
    components: {
      Tabbar,
      Tabitem
    }
  }
</script>
<style>
  @import '~@/assets/css/base.css';
  @import '~@/assets/font/iconfont.css';
  
  .iconfont {
    font-size: 20px;
    margin: 5px 0 3px 0;
  }
</style>
