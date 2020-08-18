<template>
  <div class="bottom_tab">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .bottom_tab {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    /* background-color: red; */
    z-index: 2;
    display: flex;
  }
  .left {
  
    flex: 2;
  }
  .center,
  .right {
    flex: 1;
  }
</style>
