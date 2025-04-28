import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'; 
import Cart from '../views/Cart.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'
import ProductList from '../views/ProductList.vue';
import ProductPage from '../views/ProductPage.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductList
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: ProductPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
