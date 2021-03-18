import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductoForm from '../views/ProductoForm.vue'
import PresentacionForm from '../views/PresentacionForm.vue'
import EditarProducto from '../views/PutProducto.vue'
import EditarPresentacion from '../views/PutPresentacion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editPresentacion/:id',
    name: 'EditarPresentacion',
    component: EditarPresentacion
  },
  {
    path: '/editProducto/:id',
    name: 'EditarProducto',
    component: EditarProducto
  },
  {
    path: '/presentform',
    name: 'PresentacionForm',
    component: PresentacionForm
  },
  {
    path: '/pform',
    name: 'ProductoForm',
    component: ProductoForm
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
