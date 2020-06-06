import Index from './components/Index.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import ProductList from './components/ProductList.vue';
import Profile from './components/Profile.vue';
import UploadForm from './components/form/UploadForm.vue';

export const routes = [
	{path: '/', component: Index, name: 'mainpage'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/list', component: ProductList, name: 'productlist'},
	{path: '/profile', component: Profile, name: 'profile'},
	{path: '/upload', component: UploadForm, name: 'upload'},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '*', redirect: '/' }
];