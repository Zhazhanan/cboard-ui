import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import MainHeader from './components/MainHeader'
import MainSidebar from './components/MainSidebar'
import MainFooter from './components/MainFooter'
import MainContent from './components/MainContent'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.component('MainHeader', MainHeader);
Vue.component('MainSidebar', MainSidebar);
Vue.component('MainFooter', MainFooter);
Vue.component('MainContent', MainContent);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
