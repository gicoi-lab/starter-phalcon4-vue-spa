export default {
  callingAPI: false,
  searching: '',
  // serverURI: 'http://192.168.0.40:8901',
  serverURI: 'http://127.0.0.1:8081',
  i18nCode: 'zh',
  goodCode: null,
  payerCode: null,
  usrCode: null,
  usrInfo: {},
  pmsListSetup: [],
  groupListSetup: [],
  matchRoomList: [],
  unReadMsg: 0,
  unReadSent: 0,
  unReadInbox: 0,
  cate1: [],
  cate2: [],
  cate3: [],
  user: {
    init: false
  },
  bizId: null,
  bizResource: null,
  bizResList: {},
  resId: null,
  token: null,
  aclGroup: null,
  aclModules: ['all'],
  aclPermissions: ['all'],
  appInit: null,
  displayMode: 'list',
  currRoutePath: null,
  currMenuOpenPath: null,
  currMixMenuConfig: [],
  currModuleName: null,
  currModuleOption: {},
  userInfo: {
    messages: [{1: 'test', 2: 'test'}],
    notifications: [],
    tasks: []
  },

  bulletinList: [],

  isAchApplied: false,

  loadCusData: [],

  loadBillClsCache: {
    // index by ClsSn
    BillItemMap: {},

    // index by ItemCode
    BillPeriodsMap: {}
  },
  loadSysResourceType: [],
  loadSysEnvConfig: {},
  loadSysResConfig: {},
  loadBillCls: [],
  loadBillClsMap: {},
  loadBillClsItem: [],
  loadBillPeriod: [],
  loadAchCode: [],
  loadAchCodeMap: {},
  loadPmsPrdCate: [],
  loadMenuUnitList: [],
  loadMenuUnitMap: {},
  loadMenuBrandList: [],
  loadMenuPrdCateList: [],
  currSeleteStartDate: null,
  currSeleteEndDate: null
}
