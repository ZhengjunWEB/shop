<template>
  <div class="login">
   <div class="login_box">
    <div class="avatar">
      <img src="@/assets/img/user/yonghu.png" alt="">
    </div>
    <div class="sign_in">
      <div class="sign">登录 / 注册</div>
      <div>
        <img src="@/assets/img/user/shouji.png" alt="">
        <span> 暂无绑定手机号</span>
      </div>
    </div>
   </div>

    <div class="nav">
      <div class="nav_item">
        <div>
          <span class="money">0.00</span>元
        </div>
        <span>我的余额</span>
      </div>
      <div class="nav_item">
        <div>
          <span class="money">0</span>个
        </div>
        <span>我的优惠</span>
      </div>
      <div class="nav_item">
        <div>
          <span class="money">0</span>分
        </div>
        <span>我的积分</span>
      </div>
      
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .login_box {
    display: flex;
    height: 80px;
    background-color: #ff5777;
    color: #fff;
  }
  .avatar {
    width: 30%;
    line-height: 80px;
    text-align: center;
    
  }
  .avatar img {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 50%;
    margin-top: 10px;
  }
  .sign_in {
    width: 70%;
  }
  .sign_in img {
    width: 12px;
    height: 12px;
    margin-top: 5px;
  }
  .sign {
    font-size: 16px;
    margin-top: 15px;
    padding-left: 3px;
  }
  .nav {
    display: flex;
    height: 70px;
    border-bottom: 10px solid #eee;
    text-align: center;
  }
  .money {
    font-size: 16px;
    color: orange;
  }
  .nav_item {
    flex: 1;
    box-sizing: border-box;
    padding-top: 15px;
    color: #555;
  }
  .nav_item div {
    margin-bottom: 5px;
  }
</style>
