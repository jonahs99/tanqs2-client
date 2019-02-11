import Vue from 'vue'
import App from './vue/overlay.vue'

const AppComponent = Vue.extend(App)

const app = new AppComponent().$mount('#app')

export default app
