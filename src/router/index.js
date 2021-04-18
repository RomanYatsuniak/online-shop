import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main";
import Login from "@/views/Login";
import Register from "@/views/Register";
// import Admin from "@/views/Admin";
// import AdminOrders from "@/views/AdminOrders";
// import AdminProducts from "@/views/AdminProducts";
// import AdminUsers from "@/views/AdminUsers";
import Cart from "@/views/Cart";
import Products from "@/views/Products";
import Product from "@/views/Product";
import Admin from "@/views/Admin";
import AdminOrders from "@/views/AdminOrders";
import AdminProducts from "@/views/AdminProducts";
import AdminUsers from "@/views/AdminUsers";

const routes = [
  {path: '/login', component: Login, name: 'login'},
  {path: '/register', component: Register, name: 'register'},
  {path: '/cart', component: Cart, name: 'cart'},
  {path: '/main', component: Main, name: 'main'},
  {path: '/products', component: Products, name: 'products'},
  {path: '/products/:id', component: Product, name: 'product'},
  {path: '/admin', component: Admin, name: 'admin'},
  {path: '/admin/orders', component: AdminOrders, name: 'admin-orders'},
  {path: '/admin/products', component: AdminProducts, name: 'admin-products'},
  {path: 'admin/users', component: AdminUsers, name: 'admin-users'},
  {path: '/', component: Main, name: 'home'},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
