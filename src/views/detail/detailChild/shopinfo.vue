<template>
  <div class="shopinfo">
    <div class="shop_title">
      <div class="img">
        <img :src="shopInfo.shopLogo" alt="">
      </div>
      <div>
        <span>{{shopInfo.name}}</span>
      </div>
    </div>
    <div class="shop_detail">
      <div class="detail_left">
        <div class="sales">
          <h4>{{shopInfo.cSells | sales}}</h4>
          <span>总销量</span>
        </div>
        <div class="all">
          <h4>{{shopInfo.cGoods}}</h4>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="detail_right">
        <div v-for="item in shopInfo.score"  class="right_item">
          <span>{{item.name}}</span>
          <span class="green" :class="{good:item.score >= 4.9 }">{{item.score}}</span>
          <span class="b_bad" :class="{b_good:item.isBetter }" > {{item.isBetter?'高':'低'}}</span>
        </div>
      </div>  
    </div>
    <div class="go"><a href="">进店逛逛</a></div>
  </div>
</template>
<script>
  export default {
    props:{
      shopInfo:Object
    },
    data() {
      return {

      }
    },
    filters:{
      sales(value) {
        return (value / 10000).toFixed(1) +'万'
      }
    }
  }
</script>
<style scoped>
  .shopinfo {
    padding: 0 5px;
  }
  .shop_title {
    display: flex;
    align-items: center;
    height: 80px;
    font-size: 14px;
  }
  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    border:1px solid #aaa;
    margin-right: 5px;
  }
  .shop_title img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .shop_detail {
    height: 80px;
    display: flex;
  }
  .detail_left,
  .detail_right {
    display: flex;
    align-items: center;
    text-align: center;
    flex: 1;
    position: relative;
  }
  .detail_right {
    box-sizing: border-box;
    flex-wrap: wrap;
    align-content: space-between;
    padding:10px 0 10px 20px;
  }
  .detail_left::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 50px;
    top: 15px;
    right: 0;
    background-color: #ccc;

  }
  .sales ,
  .all {
    flex: 1;
  }
  h4 {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 520;
  }
  .green {
    color: green; 
  }
  .good {
    color: red ;
  }
  .b_bad {
    display: inline-block;
    padding: 1px;
    color: #fff;
    background-color: green;
  }
  .b_good {
    display: inline-block;
    padding: 1px;
    color: #fff;
    background-color: red;
  }
  .right_item {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .go {
    text-align: center;
    height: 50px;
    border-bottom: 3px solid #eee;
  }
  .go a {
    margin-top: 4px;
    display: inline-block;
    padding: 2px 25px;
    background-color: #eee;
    border-radius: 8px;
    line-height: 16px;
  }
</style>
