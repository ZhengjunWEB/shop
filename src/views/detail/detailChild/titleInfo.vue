<template>
  <div class="titleInfo">
    <div class="title">
      {{info}}
    </div>
    <div class="price">
      <span>￥{{highNowPrice}}</span> <i>{{highPrice}}</i>
    </div>
    <div class="sales">
      <div v-for="item in columns" :key="item" class="sales_item"> {{item}}</div>
    </div>
    <div class="pack">
      <div v-for="item in pack" :key="item" class="pack_item"> 
         <img src="@/assets/img/home/confirm.svg" alt="">
          {{item}} 
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      info: String,
      highNowPrice: String,
      highPrice: String,
      columns: Array
    },
    data() {
      return {
        pack: ['退货补运费','全国包邮','7天无理由退货']
      }
    }
  }

</script>
<style scoped>
  .titleInfo {
    padding: 0 5px;
  }
  .title {
    font-size: 14px;
    margin: 10px 0;
  }
  .sales {
    display: flex;
    text-align: center;
    margin-top: 20px;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
  }
  .sales_item {
    color: #aaa;
  }
  .price {
    position: relative;
  }
  .price span {
    color: #FF8E97;
    font-size: 18px;
    margin-right: 5px;
  }
  .price i {
    text-decoration:line-through ;
    color: #aaa;
  }
  .price::after {
    content: '活动价';
    width: 50px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    border-radius: 8px;
    background-color:#FF8E97 ;
    position: absolute;
    left: 118px;
    top: -5px;
    font-size: 12px;
    color: #fff;
  }
  .pack {
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    border-bottom: 3px solid #eee;
  }
  .pack img {
    width: 10px;
    height: 10px;
  }
</style>
