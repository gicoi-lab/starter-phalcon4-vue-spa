import moment from 'moment'
import { mapState } from 'vuex'
import console from 'console'
import _ from 'lodash'

export default {
  name: 'full',
  components: {
  },
  destroyed () {
    this.$root.$off('app::login::success')
    this.$root.$off('app::toast::show')
    this.$root.$off('APP_API_RESULT_ERROR')
    this.$root.$off('APP_API_PUSH_ERROR')
  },
  async created () {
    console.log('on app container created')
  },
  async mounted () {
    // alert('App Full.js init')

    this.$root.$on('APP_API_PUSH_ERROR', opt => {
      this.toast(opt.title, opt.variant, opt.message)
    })
    this.$root.$on('APP_API_RESULT_ERROR', opt => {
      this.toast(opt.title, opt.variant, opt.message)
    })
    this.$root.$on('app::toast::show', opt => {
      this.toast(opt.title, opt.variant, opt.message)
    })
    this.$root.$on('app::login::success', () => {
      if (this.$route.path !== '/vip-center') {
        this.$router.push('/vip-center')
      }
    })

    this.$nextTick(() => {
      this.appAuthError = false
      this.$store.commit("SET_APP_INI", true)
    })
  },
  data () {
    return {
      moment: moment,
      renderKey: 1,
      appAuthError: false,
      reloadUnReadPerTime: 20 * 1000, // 20 s

      toastOpts: {
        delayTime: 5000,
        title: '',
        variant: 'warning',
        message: null
      }
    }
  },
  computed: {
    ...mapState([
      'token', 'serverURI', 'appInit',
      'user', 'i18nCode'
    ]),
    breadcrumItems() {
      return [
      ]
    },
    name () {
      return this.$route.name
    },
    list () {
      return _.concat([{
        name: this.bizResList[this.resId],
        title: true
      }], this.$route.matched)
    }
  },
  methods: {
    mockFn() {
    },
    toast (title = null, variant = 'info', message = null) {
      if (title !== null) {
        this.renderKey++
        this.toastOpts.variant = variant
        this.toastOpts.title = title
        this.toastOpts.message = message
        // this.$bvToast.show('app-toast-info')
        this.$bvToast.toast(message, {
          'auto-hide-delay': this.toastOpts.delayTime,
          title: this.toastOpts.title,
          variant: this.toastOpts.variant,
          toaster: 'b-toaster-top-center',
          solid: true,
          appendToast: true
        })
      }
    }
  }
}
