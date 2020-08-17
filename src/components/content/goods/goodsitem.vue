<template>
  <div class="gooditem">
    <a href="">
      <div class="img">
        <img :src="gooditem.show.img" alt="">
      </div>
    </a>
    <div class="title">{{gooditem.title | title}}</div>
    <div>
      <span class="price">￥{{ gooditem.price}}</span>
      <span>{{gooditem.cfav}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
     gooditem:Object
    },
    filters:{
      title(value) {
        return value.slice(0,12)+'...'
      }
    }
  }
</script>
<style scoped>
  .gooditem {
    width: 50%;
    height: 260px;
    text-align: center;
  }
  .img {
    width: 95%;
    height: 81%;
    margin: 0 auto;
    margin-bottom: 5px;
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .title {
    margin-bottom: 5px;
  }
  .price {
    margin-right: 5px;
    color: #FF8E97;
  }
</style>
