<template>
  <div class="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      probeType:Number,
      pullupload:Boolean
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType:this.probeType,
        //上拉加载
        pullUpLoad:this.pullupload
      })

      this.scroll.on('scroll', position => {
        this.$emit('scroll',position)
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x, y, time = 600) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPull() {
        this.scroll.finishPullUp()
      }
    }
  }
</script>
<style scoped>
  .scroll {
    width: 100%;
    overflow: hidden;

  }
</style>
