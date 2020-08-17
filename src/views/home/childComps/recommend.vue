<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend_item">
      <a href="" >
        <div class="recommend_img">
           <img :src="item.image" alt="">
        </div>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      recommend:Array
    }
  }
</script>
<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
   padding: 15px 0 30px;
   border-bottom: 10px solid #eee;
  }
  .recommend_item {
    flex: 1;
  }
  .recommend_img {
    margin: 0 auto 10px;
    width: 65px;
    height: 65px;
  }
  .recommend_img img {
    width: 100%;
    height: 100%;
  }
</style>
