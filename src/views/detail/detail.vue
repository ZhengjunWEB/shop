<template>
  <div class="detail">
    <navbar class="navbar">
      <div slot="left" class="detail_left">
        <img src="@/assets/img/home/back.svg" alt="" @click="goBack">
      </div>
      <div slot="center" class="detail_center">
        <div v-for="(item, index) in title" :key="item" class="detail_item" :class="{active:index == isActive}"
          @click="detail_change(index)"> {{item}} </div>
      </div>
    </navbar>
    <scroll class="swiper">
      <div class="content">
        <swiper :banner="banner"></swiper>
        <titleinfo :info="info" :high-now-price="highNowPrice" :high-price="highPrice" :columns="columns"></titleinfo>
        <shopinfo :shop-info="shopInfo"></shopinfo>
        <size :size="size"></size>
        <shopdetail :set="set"></shopdetail>
      </div>
    </scroll>
    <bottomtab>
      <div slot="left" class="tab_left">
        <div class="tab_item">
          <div class="tab_img">
            <img src="@/assets/img/home/service.svg" alt="">
          </div>
          <div class="tab_text">
            客服
          </div>
        </div>
        <div class="tab_item">
          <div class="tab_img">
            <img src="@/assets/img/home/shop.svg" alt="">
          </div>
          <div class="tab_text">
            店铺
          </div>
        </div>
        <div class="tab_item">
          <div class="tab_img">
            <img src="@/assets/img/home/like.svg" alt="">
          </div>
          <div class="tab_text">
            收藏
          </div>
        </div>
      </div>
      <div slot="center" class="tab_center">加入购物车</div>
      <div slot="right" class="tab_right"> 购买</div>
    </bottomtab>
  </div>
</template>
<script>
  import navbar from '@/components/common/navbar'
  import swiper from '@/components/common/swiper/swiper2'
  import { detail } from '@/network/detail'
  import titleinfo from '@/views/detail/detailChild/titleInfo'
  import shopinfo from '@/views/detail/detailChild/shopinfo'
  import bottomtab from '@/views/detail/detailChild/bottomtab'
  import size from '@/views/detail/detailChild/size'
  import shopdetail from '@/views/detail/detailChild/shopdetail'
  import scroll from '@/components/common/scroll/Scroll'
  export default {
    name:'detail',
    data() {
      return {
        title: ['商品', '参数', '品论', '推荐'],
        isActive: 0,
        id: '',
        banner: [],
        info: '',
        highNowPrice: '',
        highPrice: '',
        columns: [],
        shopInfo: {},
        size:[],
        set:[]

      }
    },
    // created() {
    // },
    created() {
      this.id = this.$route.params.id
      detail(this.id).then(res => {
        console.log(res);
        this.banner = res.result.itemInfo.topImages
        this.info = res.result.itemInfo.title
        this.highNowPrice = res.result.itemInfo.highNowPrice
        this.highPrice = res.result.itemInfo.highPrice
        this.columns = res.result.columns
        this.shopInfo = res.result.shopInfo
        this.size = res.result.itemParams.rule.tables[0]
        this.set = res.result.itemParams.info.set
      })
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      detail_change(index) {
        this.isActive = index
      }
    },
    components: {
      navbar,
      swiper,
      titleinfo,
      shopinfo,
      scroll,
      bottomtab,
      size,
      shopdetail
    }
  }
</script>
<style scoped>
  .detail {
    position: relative;
    height: 100vh;
  }

  .navbar {
    line-height: 44px;
    text-align: center;
  }

  .detail_center {
    display: flex;
  }

  .detail_item {
    flex: 1;
  }

  .detail_left img {
    margin-top: 13px;
    width: 18px;
    height: 18px;
  }

  .active {
    color: #FF8E97;
  }

  .swiper {
    position: fixed;
    top: 44px;
    height: calc(100% - 93px);
    z-index: 2;
    background-color: #fff;
  }
  .tab_left {
    height: 100%;
    background-color: #fff;
    display: flex;
  }
  .tab_item {
    text-align: center;
    flex: 1;
  }
  .tab_center {
    height: 100%;
    text-align: center;
    line-height: 49px;
    background-color: yellow;
  }

  .tab_right {
    height: 100%;
    text-align: center;
    line-height: 49px;
    background-color: #FC7699;
    color: #fff;
  }
  .tab_img {
    width: 20px;
    height: 20px;
    margin: 5px auto;
  }
  .tab_img img {
    width: 100%;
    height: 100%;
  }
</style>
