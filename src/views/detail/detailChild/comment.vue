<template>
  <div class="comment">
    <div class="com_more">
      <span class="more_item">用户评价</span>
      <h4 class="more_item">更多</h4>
    </div>
    <!-- 判断有无数据 -->
    <div class="comment_info" v-if="Object.keys(rate).length != 0">
      <div class="info_title">
        <img :src="user.avatar" alt="">
        <span>{{user.uname}}</span>
      </div>
      <div class="comment_detail">
        <div>{{rate.content}}</div>
      </div>
      <div class="com_style">
        <span class="date">{{rate.created | showDate}}</span>
        <span >{{rate.style}}</span>
      </div>
      <div class="user_img">
        <img v-for="(item, index) in rate.images" :src="item" :key="index">
      </div>
     
    </div>
    <div v-else class="none">
      <span>暂无评价</span>
    </div>
  
  
  </div>
</template>
<script>
  export default {
    props:{
      rate: {
        type: Object,
        default() {
          return {}
        }
      },
      user: Object,
      recommend: Array
    },
    data() {
      return {
      }
    },
    filters: {
      showDate(value) {
        let oldDate = new Date(value * 1000)
        let y = oldDate.getFullYear()
        let m = oldDate.getMonth() + 1
        let d = oldDate.getDate()
        return y + '年'+ m + '月' + d + '日'
      }
    }
  }
</script>
<style scoped>
  .comment {
    padding: 0 10px;
    color: #555;
    font-size: 14px;
  }
  .com_more {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    line-height: 40px;
    height: 40px;
    border-bottom: 2px solid #eee;
    
  }
  .comment_info {
    margin-top: 10px;
  }
  .info_title {
 
    margin-bottom: 10px;
  }
  .info_title img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: middle;
    margin: 0 10px;
  }
  .com_style {
    font-size: 12px;
    color: #bbb;
    margin-top: 8px;
  }
  .date {
    margin-right: 8px;
  }
  .user_img img {
    width: 60px;
    height: 60px;
    margin-right: 5px;
    margin-top: 8px;
  }
  .none {
    text-align: center;
    margin-top: 10px;
  }
  /* .more_item {
    flex: 1;
  } */
</style>
