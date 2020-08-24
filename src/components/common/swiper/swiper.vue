<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in banner" :key="item.acm">
        <img :src="item.image" @load="imgLoad">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
  import { Swipe, SwipeItem } from 'vant';
  export default {
    props: {
      banner: Array
    },
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    methods: {
      imgLoad() {
      console.log();
      this.$emit('onload')
    }
    }
  }
</script>
<style scoped>
  .my-swipe .van-swipe-item {
    /* margin-top: 44px; */
    width: 100%;
    height: 165px;
  }

  .van-swipe-item img {
    width: 100%;
    height: 100%;
  }
</style>
