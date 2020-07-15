import Vue from 'vue';
import ElementUI from 'element-ui';
import vSelect from 'vue-select'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'
import { routes } from './routes';
import store from './stores/store';
import { firebaseListener } from './config/firebaseConfig';
import './assets/styles/app.scss'
import { Carousel, CarouselItem } from 'element-ui';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue';
import './plugins/element.js'
import './assets/css/all.min.css'
import lineClamp from 'vue-line-clamp'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'

Vue.use(ScrollFixedHeader)
Vue.component('v-select', vSelect)
Vue.use(VueRouter, ElementUI);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
firebaseListener(authStatusChange);
Vue.use(lineClamp, {
	// plugin options
  })

const router = new VueRouter({
	mode: 'history',
	routes,
	VueperSlide,
	VueperSlides
});

// router.beforeEach((to, from, next) => {
//     if (to.onlyGuest && store.getters.isLoggedIn) {
//         next('/');
//     } else {
//         next();
//     }
// });


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})



function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		}
	}

}
