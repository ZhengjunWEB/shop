<template>
  <div class="cate_ist">
    <div v-for="(item, index) in list" :key="index" :class="{active:index==isActive}" @click="cateItemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      list: Array,
    
    },
    data() {
      return {
        isActive: 0
      }
    },
    methods: {
      cateItemClick(i) {
        this.isActive = i
        this.$emit('clickList', i)
      }
    }
  }
</script>
<style scoped>
  .cate_ist div {
    height: 40px;
    line-height: 40px;
    text-align: center;
    box-sizing: border-box;
  }
  .active {
    color: #ff5777;
    border-left: 3px solid #ff5777;
    background-color: #fff;
  }
</style>
