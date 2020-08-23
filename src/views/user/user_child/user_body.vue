<template>
  <div class="user_body">
    <div class="body_item">
      <img src="@/assets/img/user/xiaoxi.png" alt="">
      <span>我的消息</span>
    </div>
    <div class="body_item">
      <img src="@/assets/img/user/jifen.png" alt="">
      <span>积分商城</span>
    </div>
    <div class="body_item">
      <img src="@/assets/img/user/vip.png" alt="">
      <span>会员卡</span>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .user_body {
    border-bottom: 10px solid #eee;
  }
  .body_item {
    height: 35px;
    line-height: 35px;
    padding-left: 20px;
    color: #555;
  }
  .body_item img {
    width: 14px;
    height: 14px;
    margin-right: 10px;
    vertical-align: middle;
  }
</style>
