<template>
  <div class="cate_detail">
    <h1>{{title}}</h1>
  </div>
</template>
<script>
  export default {
    props: {
      list: Array,
      num: Number
    },
    computed: {
      title() {
        let list = this.list[this.num]
        return list
      }
    }
  }
</script>
<style scoped>

</style>
