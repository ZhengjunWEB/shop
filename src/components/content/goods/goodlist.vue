<template>
  <div class="goodlist">
    <goodsitem  class="item" v-for="(item, index) in goods" :gooditem="item" :key="index" />
  </div>
</template>
<script>
  import goodsitem from './goodsitem'
  export default {
    props:{
      goods:Array
    },
    components:{
      goodsitem
    }
  }
</script>
<style scoped>
  .goodlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  /* .item {
    width: 48%;
  } */
</style>
