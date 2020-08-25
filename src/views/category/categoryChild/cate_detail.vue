<template>
  <div class="cate_detail">
    <div v-for="(item, index) in dateil_list" class="detail_item" :key="index">
      <div class="img">
        <img :src="item.image" alt="">
      </div>
      <div class="text">
        {{item.title}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      dateil_list: Array,
      num: Number
    },
    computed: {
      title() {
        let list = this.list[this.num]
        return list
      }
    }
  }
</script>
<style scoped>
  .cate_detail {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .detail_item {
    width: 33.33%;
    height: 100px;
    text-align: center;
  }
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
</style>
