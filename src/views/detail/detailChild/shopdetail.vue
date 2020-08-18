<template>
  <div class="shopdetail">
    <table cellspacing="0">
      <tbody>
        <tr v-for="(item, index) in set" :key="index">
          <td class="td_one">{{item.key}}</td>
          <td class="td_">{{item.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    props:{
      set:Array
    }
  }
</script>
<style scoped>
  .shopdetail {
    padding: 0 5px;
  }
  tr {
    height: 30px;
  }
  td {
    border-bottom: 1px solid #eee;
  }
  tr td:nth-child(1) {
    width: 70px;
  }
  tr td:nth-child(2) {
   color: #FF8E97;
  }
 
</style>
