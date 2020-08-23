<template>
  <div class="cart">
    <navbar class="navbar">
      <div slot="center">
        我的购物车
      </div>
    </navbar>
    <scroll class="scroll" ref="scroll">
      <cart_item></cart_item>
    </scroll>
    <price></price>
  </div>
  
</template>
<script>
  import navbar from '@/components/common/navbar'
  import cart_item from '@/views/cart/cartChildCom/cart_item'
  import scroll from '@/components/common/scroll/Scroll'
  import price from '@/views/cart/cartChildCom/price'
  export default {
    components: {
      cart_item,
      navbar,
      scroll,
      price
    },
    activated() {
      this.$refs.scroll.scroll.refresh()
    }
  }

</script>
<style scoped>
  .cart {
    height: 100vh;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .navbar {
    background-color: #ff5777;
    color: #fff;
    font-size: 16px;
  }
  .scroll {
    height:calc(100% - 123px);
    position: fixed;
    top: 44px;
  }
</style>
