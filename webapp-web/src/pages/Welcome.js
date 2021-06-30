import {mapState} from 'vuex'
import moment from 'moment'
import console from 'console'

export default {
  name: 'Welcome',
  props: {},
  computed: {
    ...mapState([
      'token', 'serverURI', 'appInit',
      'user', 'i18nCode'
    ])
  },
  data () {
    return {
      moment: moment,
      renderCnt: 0,
      orderList: [],
    }
  },
  async mounted () {
    let act = this.$route.params.ACT !== undefined ? this.$route.params.ACT : 'loading'
    let guid = this.$route.params.GUID !== undefined ? this.$route.params.GUID : 'ALL'
    await this.fetchData(guid, act)
  },
  methods: {
    async fetchData (guid = null, act = 'load') {
      let self = this
      try {
        // Make a request for a user with a given ID
        this.$axios.get(this.serverURI + `/api/user?guid=${guid}&act=${act}`)
          .then(function (response) {
            // handle success
            console.log(response);
            self.$store.commit('SET_USER', response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      } catch (err) {
        if (err.response.status === 401) {
          return false
        }
      }
      this.renderCnt++
      return true
    }
  }
}
