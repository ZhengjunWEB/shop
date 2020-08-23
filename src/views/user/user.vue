<template>
  <div class="profile">
    <navbar class="navbar">
      <div slot="center">我的</div>
    </navbar>
    <usre_login></usre_login>
    <usre_body></usre_body>
    <usre_footer></usre_footer>
  </div>
</template>
<script>
  import navbar from '@/components/common/navbar'
  import usre_login from '@/views/user/user_child/user_login'
  import usre_body from '@/views/user/user_child/user_body'
  import usre_footer from '@/views/user/user_child/user_footer'
  export default {
    components: {
      navbar,
      usre_login,
      usre_body,
      usre_footer
    }
  }
</script>
<style scoped>
  .navbar {
    background-color: #ff5777;
    color: #fff;
    font-size: 16px;
  }
</style>
