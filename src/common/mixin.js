import goBack from '@/components/content/goback/goBack'

export const goBackMixin = {
  components: {
    goBack
  },
  data() {
    return {
      showback:false,
    }
  },
  methods: {
    goback() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
