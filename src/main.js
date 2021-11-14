/*
 * @Author: your name
 * @Date: 2021-11-14 19:17:23
 * @LastEditTime: 2021-11-14 21:52:57
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \阶段五 Vue.js项目实战开发\前端vue移动端项目资料\vue移动端项目第一天\one\toutiao-m\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
