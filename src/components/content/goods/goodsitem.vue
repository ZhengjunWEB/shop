<template>
  <div class="gooditem" @click = 'goodItemClick(gooditem.iid)'>
      <div class="img">
        <img v-lazy="showImg" alt="">
      </div>
    <div class="title">{{gooditem.title}}</div>
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
        return value.slice(0,10)+'...'
      }
    },
    methods:{
      goodItemClick(id) {
       this.$router.push('/detail/'+id)
      }
    },
    computed: {
      showImg() {
        return  this.gooditem.image || this.gooditem.show.img
      }
    }
  }
</script>
<style scoped>
  .gooditem {
    width: 50%;
    height: 260px;
    text-align: center;
    padding-bottom: 10px;
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
    text-overflow: ellipsis;
    margin-bottom: 5px;
    white-space:nowrap;
    overflow:hidden;
  }
  .price {
    margin-right: 5px;
    color: #FF8E97;
  }
</style>
