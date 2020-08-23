<template>
  <div class="price">
    <div class="price1">
      <div class="pay">
        <i :class="{isChecked: isAll}" @click="allClick"></i>
        <span>全选 </span>
        <span>结算({{count}})</span>
      </div>
      <div>
        总价 {{ totalPrice }} 元
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        flag: true
      }
    },
    computed: {
      //判断选中商品价格
      totalPrice() {
        let total = 0
        this.$store.state.cartList.forEach(item => {
          if (item.isChecked) {
            total += item.count * item.price
          }
        });
        return total.toFixed(2)
      },
      //判断商品数量
      count() {
        let count = 0
        this.$store.state.cartList.forEach(item => {
          if (item.isChecked) {
            count += item.count
          }
        });
        return count
      },
      //判断是否全选
      isAll: {
        get() {
          let isAll = this.$store.state.cartList.some(item => {
            return item.isChecked == false
          })
          return !isAll
          // if(isAll) {
          //   return !isAll
          // } else {
          //   return !isAll
          // }
        },
        set(value) {
          this.flag = value
        }

      }
    },
    methods: {
      //去vuex中判断是否全选。。
      allClick() {
        this.flag = !this.flag
        this.$store.commit('allClick', this.flag)
      }
    }
  }
</script>
<style scoped>
  .price1 {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: #bbb;
    height: 30px;
    line-height: 30px;
    text-align: right;
    padding: 0 20px 0 30px;
    color: #fff;
  }

  .pay {
    position: relative;
  }

  .pay i {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #fff;
    top: 7px;
    left: -25px;
    background-color: #fff;
  }

  .pay .isChecked {
    background: url("../../../assets/img/home/selected.png") no-repeat;
    background-size: 15px 15px;
    border-color: red;
  }
</style>
