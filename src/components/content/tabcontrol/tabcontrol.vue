<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" class="tab_item" :key="index" @click="changeItem(index)"> 
      <span :class="{active:index == tabindex}">{{item}}</span>
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
  export default {
    props:{
      titles:{
        type:Array,
        default() {
          return ['流行','新款','精选']
        }
      }
    },
    data() {
      return {
        isActive:0,
        path:['/home/pop','/home/new','/home/sell']
      }
    },
    methods:{
      changeItem(index) {
        this.$store.commit('changIndex',index)
        this.$emit('tabchange',index)
      }
    },
    computed:{
      tabindex() {
        return  this.$store.state.tabIndex
      }
    }
  }
</script>
<style scoped>
  .tab_control {
    display: flex;
    text-align: center;
  }
  .tab_item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active {
    color: #FF8E97;
    padding:0 3px 5px;
    border-bottom: 2px solid #FF8E97;
  }
</style>
