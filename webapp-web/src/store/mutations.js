import _ from 'lodash'
// import console from 'console'

export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  UPDATE_MATCH_ROOMS(state, matchRoomList = []) {
    state.matchRoomList = matchRoomList
  },
  UPDATE_UNREAD_MSG(state) {
    state.unReadMsg -= 1
  },
  UPDATE_UNREAD_CNT(state, config = {}) {
    // console.log(config)
    state.unReadInbox = config.unReadInbox
    state.unReadSent = config.unReadSent
    state.unReadMsg = config.unReadMsg
    // console.log(state.unReadInbox, state.unReadSent, state.unReadMsg)
  },
  UPDATE_SYS_RES_CONFIG (state, config = {}) {
    if (_.isObject(config)) {
      let indexKeys = Object.keys(config)
      indexKeys.forEach((key) => {
        // 排除預設回覆狀態
        if (key !== 'action' && key !== 'configModuleName') {
          // 覆蓋更新
          state.loadSysResConfig[key] = config[key]
        }
        if (key === 'resource_type') {
          state.loadSysResConfig = config[key]
        }
      })
    }
  },
  UPDATE_SYS_ENV_CONFIG (state, config = {}) {
    if (_.isObject(config)) {
      let indexKeys = Object.keys(config)
      indexKeys.forEach((key) => {
        // 排除預設回覆狀態
        if (key !== 'action' && key !== 'configModuleName') {
          // 覆蓋更新
          state.loadSysEnvConfig[key] = config[key]
        }
        if (key === 'resource_type') {
          state.loadSysResourceType = config[key]
        }
      })
    }
  },
  SET_CATE_1(state, meta) {
    state.cate1 = meta
  },
  SET_CATE_2(state, meta) {
    state.cate2 = meta
  },
  SET_CATE_3(state, meta) {
    state.cate3 = meta
  },
  SET_I18NCODE (state, i18nCode) {
    state.i18nCode = i18nCode
  },
  SET_BULLETIN_LIST (state, list) {
    state.bulletinList = list
  },
  SET_RESOURCE_ID (state, resId) {
    if (!_.isEmpty(resId)) {
      state.resId = resId
    }
  },
  SET_RESOURCE_NAME_LIST (state, resList) {
    state.bizResList = (resList != null ? resList : {})
  },
  SET_RESOURCE (state, res) {
    state.bizResource = res
    state.resId = (res != null ? res.res_id : null)
  },
  SET_USER (state, user) {
    state.user = user
    state.bizId = (user != null && user.biz_id !== undefined ? user.biz_id : null)
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_ACL_GROUP (state, aclGroup) {
    state.aclGroup = aclGroup
  },
  SET_ACL_MODULE (state, aclModules) {
    state.aclModules = aclModules
  },
  SET_ACL_MODULE_PUSH (state, aclModule) {
    state.aclModules.push(aclModule)
    state.aclPermissions.push(aclModule)
  },
  SET_ACL_PERMISSION_PUSH (state, aclPermission) {
    state.aclPermissions.push(aclPermission)
  },
  SET_ACL_LOGOUT (state) {
    // state.loadSysEnvConfig = {}
    state.aclPermissions = ['all']
    state.aclModules = ['all']
  },
  SET_APP_INI (state, init) {
    state.appInit = init
  },
  SET_SERVER_URI (state, serverURI) {
    state.serverURI = serverURI
  },
  SET_MENU_OPEN_PATH (state, currMenuOpenPath) {
    state.currMenuOpenPath = currMenuOpenPath
  }
}
