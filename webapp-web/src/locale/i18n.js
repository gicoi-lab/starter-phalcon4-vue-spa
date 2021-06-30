import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 自訂語言檔
import en from './lang/en_us.js'
import zh from './lang/zh_tw.js'
import ja from './lang/ja_jp.js'

// 使用插件
Vue.use(VueI18n)

// 取得預設語系
const localeDefault = 'ja'
const locale = window.I18N_CODE !== undefined ? window.I18N_CODE : localeDefault

// 建立 VueI18n 實體
const i18n = new VueI18n({
  locale,
  messages: { zh, en ,ja}
})

export default i18n
