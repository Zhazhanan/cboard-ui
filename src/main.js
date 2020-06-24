import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

//第三方插件
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import 'element-ui/lib/theme-chalk/index.css'; // In Dev

//AdminLTE
import 'admin-lte/dist/css/AdminLTE.min.css';
// import 'admin-lte/dist/js/adminlte.js';
// import 'admin-lte/dist/css/skins/skin-blue.min.css';
// import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'font-awesome/css/font-awesome.min.css';


Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
