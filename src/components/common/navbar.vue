<template>
  <div class="nav_bar">
    <div class="nav_left">
      <slot name="left"></slot>
    </div>
    <div class="nav_center">
      <slot name="center"></slot>
    </div>
    <div class="nav_right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .nav_bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 999;
   
  }
  .nav_left,
  .nav_right {
    width: 60px;
  }
  .nav_center {
    flex: 1;
  }

</style>
