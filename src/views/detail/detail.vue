<template>
  <div class="detail">
    <div class="success" v-show="success">
      加入购物车成功！
    </div>
    <navbar class="navbar">
      <div slot="left" class="detail_left">
        <img src="@/assets/img/home/back.svg" alt="" @click="goBack1">
      </div>
      <div slot="center" class="detail_center">
        <div v-for="(item, index) in title" :key="item" class="detail_item" :class="{active:index == isActive}"
          @click="detail_change(index)"> {{item}} </div>
      </div>
    </navbar>
    <scroll class="swiper" ref="scroll" @scroll="conScroll" :probeType="3">
      <div class="content">
        <swiper :banner="banner" @imgLoad="imgLoad"></swiper>
        <titleinfo :info="info" :high-now-price="highNowPrice" :high-price="highPrice" :columns="columns"></titleinfo>
        <shopinfo :shop-info="shopInfo"></shopinfo>
        <size :size="size" ref="size"></size>
        <shopdetail :set="set"></shopdetail>
        <comment :rate="rate" :user="user" :recommend="recommend" ref="comment"></comment>
        <div>
          <h4>今日推荐</h4>
        </div>
        <goodlist :goods="recommend" class="good_list" ref="recommend">

        </goodlist>

      </div>
    </scroll>
    <goBack @click.native="goback" v-show="showback"></goBack>
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
      <div slot="center" class="tab_center" @click="addCart">加入购物车</div>
      <div slot="right" class="tab_right"> 购买</div>
    </bottomtab>
  </div>
</template>
<script>
  import navbar from '@/components/common/navbar'
  import swiper from '@/components/common/swiper/swiper2'
  import { detail, recommend } from '@/network/detail'
  import titleinfo from '@/views/detail/detailChild/titleInfo'
  import shopinfo from '@/views/detail/detailChild/shopinfo'
  import bottomtab from '@/views/detail/detailChild/bottomtab'
  import size from '@/views/detail/detailChild/size'
  import shopdetail from '@/views/detail/detailChild/shopdetail'
  import comment from '@/views/detail/detailChild/comment'
  import goodlist from '@/components/content/goods/goodlist'
  import scroll from '@/components/common/scroll/Scroll'
  import { goBackMixin } from '@/common/mixin'
  export default {
    mixins: [goBackMixin],
    name: 'detail',
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        isActive: 0,
        id: '',
        banner: [],
        info: '',
        highNowPrice: '',
        highPrice: '',
        columns: [],
        shopInfo: {},
        size: [],
        set: [],
        rate: {},
        user: {},
        recommend: [],
        top: [],
        success: false
      }
    },
    // created() {
    // },
    created() {
      this.id = this.$route.params.id
      detail(this.id).then(res => {
        this.banner = res.result.itemInfo.topImages
        this.info = res.result.itemInfo.title
        this.highNowPrice = res.result.itemInfo.highNowPrice
        this.highPrice = res.result.itemInfo.highPrice
        this.columns = res.result.columns
        this.shopInfo = res.result.shopInfo
        this.size = res.result.itemParams.rule.tables[0]
        this.set = res.result.itemParams.info.set
        if (res.result.rate.cRate != 0) {
          this.rate = res.result.rate.list[0]
          this.user = res.result.rate.list[0].user
        }
      }),
        recommend().then(res => {
          // console.log(res);
          this.recommend = res.data.list
        })
    },

    methods: {
      goBack1() {
        this.$router.go(-1)
      },
      //tab栏点击添加class并滚动到对象位置
      detail_change(index) {
        this.isActive = index
        this.$refs.scroll.scrollTo(0, -this.top[index])
      },
      //图片加载完毕计算offsetTop
      imgLoad() {
        this.top[0] = 0
        this.top[1] = this.$refs.size.$el.offsetTop
        this.top[2] = this.$refs.comment.$el.offsetTop
        this.top[3] = this.$refs.recommend.$el.offsetTop
        this.$refs.scroll.scroll.refresh()
      },
      //页面滚动tab栏切换
      conScroll(options) {
        let y = -options.y
        if (y < this.top[1]) {
          this.isActive = 0
        } else if (y < this.top[2]) {
          this.isActive = 1
        } else if (y < this.top[3]) {
          this.isActive = 2
        } else {
          this.isActive = 3
        }

        this.showback = y > 300
      },
      addCart() {
        let goodsItem = {}
        goodsItem.img = this.banner[0],
          goodsItem.title = this.info,
          goodsItem.id = this.id,
          goodsItem.price = this.highNowPrice,
          goodsItem.count = 1,
          this.$store.commit('addGoods', goodsItem)
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 500);
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
      shopdetail,
      comment,
      goodlist
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

  h4 {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    padding-left: 15px;
    color: #555;
  }

  .success {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 200px;
    height: 40px;
    background-color: #000;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    z-index: 999;
    opacity: .8;
  }
</style>
