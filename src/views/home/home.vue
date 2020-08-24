<template>
  <div id="home">
    <navbar class="title">
      <div slot="center">
        <h3>购物街</h3>
      </div>
    </navbar>
    <tabcontrol class="control" @tabchange="tabchange" v-show="isFiexd" ></tabcontrol>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="scroll" :pullupload="true" 
    @pullingUp="pullingUp"> 
      <swiper :banner="banner" :src="item.image" @onload="onload">
      </swiper>
      <recommend :recommend="recommend">
      </recommend>
      <feature></feature>
      <tabcontrol  @tabchange="tabchange" ref="control"></tabcontrol>
      <!-- <router-view /> -->
      <goodlist :goods="showItem"></goodlist>
    </scroll>
    <goBack @click.native="goback" v-show="showback"></goBack>
  </div>
</template>
<script>
  import { getHomeData, getHomeTabData } from '@/network/home'

  import recommend from '@/views/home/childComps/recommend'
  import feature from '@/views/home/childComps/feature'

  import navbar from '@/components/common/navbar'
  import swiper from '@/components/common/swiper/swiper'
  import tabcontrol from '@/components/content/tabcontrol/tabcontrol'
  import goodlist from '@/components/content/goods/goodlist'
  import scroll from '@/components/common/scroll/Scroll'
  // import goBack from '@/components/content/goback/goBack'
  import {goBackMixin} from '@/common/mixin'

  export default {
    mixins:[ goBackMixin ],
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          pop: { page: 1, list: [] },
          new: { page: 1, list: [] },
          sell: { page: 1, list: [] }
        },
        item:['pop','new','sell'],
        index:0,
        // showback:false,
        controlTop:0,
        isFiexd:false

      }
    },
    components: {
      navbar,
      swiper,
      recommend,
      feature,
      tabcontrol,
      goodlist,
      scroll,
      // goBack
    },
    created() {
      this.getHomeData(),
      this.getHomeTabData('pop'),
      this.getHomeTabData('new'),
      this.getHomeTabData('sell')
    },
    mounted() {
     setTimeout(() => {
       this.controlTop = this.$refs.control.$el.offsetTop
     }, 500);
    },
    methods: {
      tabchange(index) {
        this.index =index
      },
      scroll(position) {
        let y = position.y
        this.showback = y <= -300

        this.isFiexd = -y >= this.controlTop
      },
      pullingUp() {
        this.getHomeTabData(this.currentView)

      
      },
      // 网络请求
      getHomeData() {
        getHomeData().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      getHomeTabData(type) {
        let page = this.goods[type].page
        getHomeTabData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.$refs.scroll.scroll.refresh()
          this.$refs.scroll.finishPull()

        })
        this.goods[type].page = page + 1
      },
      onload() {
        this.$refs.scroll.scroll.refresh()
      }
    },
    computed:{
      showItem() {
        return this.goods[this.item[this.index]].list
      },
      currentView() {
        return this.item[this.index]
      }
    }
  }

</script>
<style scoped>
  #home {
    height: 100vh;
  }
  .title {
    color: #fff;
    background-color: #FF8E97;
  }

  .control {
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .wrapper {
    height:calc(100% - 93px);
    position: fixed;
    top: 44px;
  }
</style>
