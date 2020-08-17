<template>
  <div class="tab_item" @click="itemClick" :class="{active:isActive}">
    <slot name="tab_img"></slot>
    <slot name="tab_text"></slot>
  </div>
</template>
<script>
  export default {
    props:['path'],
    data() {
      return {

      }
    },
    methods:{
      itemClick() {
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive() {
        return this.$route.path == this.path
      }
    }
  }
</script>
<style scoped>
  .tab_item {
    flex: 1;
    text-align: center;
  }
  .active {
    color: #FF8E97;
  }
</style>
