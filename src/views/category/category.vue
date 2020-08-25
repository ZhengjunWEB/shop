<template>
  <div class="cate">
    <navbar class="navbar">
      <template v-slot:center  >
        <div>商品分类</div>
      </template>
    </navbar>
    <scroll  class="cate_l">
      <cate_list :list="list" @clickList="clickList"></cate_list>
    </scroll>
    <scroll  class="cate_r" >
      <cate_detail :dateil_list="dateil_list" :num="num"></cate_detail>
    </scroll>
  </div>
</template>
<script>
  import {request} from '@/network/request'
  import navbar from '@/components/common/navbar'
  import scroll from '@/components/common/scroll/Scroll'
  import cate_list from '@/views/category/categoryChild/cate_list'
  import cate_detail from '@/views/category/categoryChild/cate_detail'

  export default {
    created() {
      request({
        url: '/category'
      }).then(res => {
        console.log(res);
        this.list =  res.data.category.list
      }),
      //获取第一次数据
      setTimeout(() => {
        this.getDetail('3627')
      },200)
    },
    data() {
      return {
        list: [],
        num: 0,
        dateil_list: []
      }
    },
    components: {
      navbar,
      scroll ,
      cate_list,
      cate_detail
    },
    methods: {
      clickList(i) {
        this.num = i
        this.getDetail(this.list[i].maitKey)
      },
      getDetail(maitKey) {
        request({
        url: '/subcategory',
        params: {
          maitKey
        }
      }).then(res => {
        this.dateil_list = res.data.list
        console.log(res);
      })
      }
    }
  }
</script>
<style scoped>
  .cate {
    height: 100vh;
  }
  .navbar {
    background-color: #ff5777;
    color: #fff;
    font-size: 16px;
  }
  .cate_l {
    height: calc(100% - 93px);
    position: fixed;
    top: 44px;
    left: 0;
    width: 112px;
    background-color: #eee;
  }
  .cate_r {
    height: calc(100% - 93px);
    position: fixed;
    top: 44px;
    right: 0;
    width: 263px;
  }

</style>
