export default {
  groupListSetup: state => {
    return state.groupListSetup
  },
  getBillClsById: (state) => (id) => {
    return state.loadBillClsMap[id]
  },
  getAchBySn: (state) => (sn) => {
    return state.loadAchCodeMap[sn]
  },
  getSysEnvConfig: (state) => (envKey) => {
    return state.loadSysEnvConfig[envKey] !== undefined ? state.loadSysEnvConfig[envKey] : false
  },
  getSysResConfig: (state) => (envKey) => {
    return state.loadSysResConfig[envKey] !== undefined ? state.loadSysResConfig[envKey] : false
  },
  checkAclCode: (state) => (permCode) => {
    return state.aclPermissions.includes(permCode)
  },
  getResBaseUri: (state) => () => {
    return state.bizResource !== null ? 'https://' + state.bizResource.resource_key_name : ''
  },
  getUnitName: (state) => (unitId) => {
    if (state.loadMenuUnitMap[unitId] !== undefined) {
      return state.loadMenuUnitMap[unitId].name
    } else {
      return '11'
    }
  }
}
