<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>
<script>

</script>
<style scoped>
  .tab_bar {
    position: fixed;
    display: flex;
    /* justify-content: space-between; */
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
  }
</style>
