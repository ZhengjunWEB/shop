<template>
  <div class="size">
    <!-- <div class="size_item" v-for="(item, index) in size" :key="index">
      <span v-for="i in item" :key="i">
        {{i}}
      </span>
    </div> -->
    <table cellspacing="0">
      <tbody>
        <tr v-for="(item, index) in size" :key="index"> 
          <td v-for="(i, index) in item" :key="index" :class="[index == 0? 'td': 'other']"> {{i}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props:{
      size:Array
    }
  }
</script>
<style scoped>
  .size {
    padding: 0 5px;
    margin-top: 15px;
  }
  table {
    border-bottom: 2px solid #ddd;
    /* box-shadow: 0 1px 2px rgba(0,0,0,.2); */
  }
  tr {
    height: 30px;
  }
  td {
    border-bottom: 1px solid #eee;
  }
  .td {
    width: 100px;
  }
  .other {
    width: 52px;
  }
  /* .size_item {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .size_item span {
    margin-right: 0px;
  }
  .size_item span:nth-child(1) {
    margin-right: 80px;
  } */
</style>
