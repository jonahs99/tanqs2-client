import Vue from 'vue'
import App from './vue/app.vue'

//const app = new Vue({
//	el: '#app',
//	template: '<App/>',
//	components: { App },
//})

const app = new Vue(App).$mount('#app')

export default app
