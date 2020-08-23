<template>
  <div class="cart_list">
    <div
      v-for="(item, index) in $store.state.cartList"
      class="cart_item"
      >
      <div class="check_box ">
        <div class="check " :class="{isChecked: item.isChecked}" @click="changeChecked(index)"></div>
      </div>
      <div>
        <img :src="item.img" class="img">
      </div>
      <div class="content">
          <p> {{item.title}}</p>
      </div>
      <div class="delete" @click="deleteCart(index)">
        <span>x{{item.count}}</span>
        <span>￥{{item.price}}</span>
        移除
      </div>
    </div>
    <div v-show="cart_length">
      购物车中没有商品
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      cart_length() {
        let cart_length = 0
        cart_length = this.$store.state.cartList.length
        if(cart_length == 0) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      deleteCart(i) {
        this.$store.commit('deleteCart',i)
      },
      changeChecked(i) {
        this.$store.commit('changeChecked', i)
      }
    }
  }
</script>
<style scoped>
  .check_box {
    position: relative;
    width: 20px;
    /* background-color: red; */
  }
  .check {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ccc;
    top: 40px;
    left: -5px;
  }
  .isChecked {
    background: url("../../../assets/img/home/selected.png") no-repeat;
    background-size: 15px 15px;
    border-color: red;
  }
  .content {
    width: 200px;
  }
  .cart_list {
    padding: 10px;
  }
  .img {
    width: 80px;
    height: 100px;
    margin-right: 10px;
  }

  .cart_item {
    position: relative;
    display: flex;
    padding: 10px 0 5px;

    border-bottom: 2px solid #ccc;
  }

  p {
    margin-bottom: 50px;
  }

  span {
    margin-right: 10px;
    color: #555;
  }


  .delete {
    color: red;
    position: absolute;
    bottom: 0;
    right: 10px;
  }
</style>
