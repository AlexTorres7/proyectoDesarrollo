import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearColaborador from '../components/CrearColaborador'
import ConsultarColaborador from '../components/ConsultarColaborador'
import ActualizarColaborador from '../components/ActualizarColaborador'
import EliminarColaborador from '../components/EliminarColaborador'
import CrearProyecto from '../components/CrearProyecto'
import ConsultarProyecto from '../components/ConsultarProyecto'
import CrearActividad from '../components/CrearActividad'
import ConsultarActividad from '../components/ConsultarActividad'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/CrearColaborador',
    name: 'CrearColaborador',
    component: CrearColaborador
  },
  {
    path: '/ConsultarColaborador',
    name: 'ConsultarColaborador',
    component: ConsultarColaborador
  },
  {
    path: '/ActualizarColaborador/:id',
    name: 'ActualizarColaborador',
    component: ActualizarColaborador
  },
  {
    path: '/EliminarColaborador',
    name: 'EliminarColaborador',
    component: EliminarColaborador
  },
  {
    path: '/CrearProyecto',
    name: 'CrearProyecto',
    component: CrearProyecto
  },
  {
    path: '/ConsultarProyecto',
    name: 'ConsultarProyecto',
    component: ConsultarProyecto
  },
  {
    path: '/CrearActividad',
    name: 'CrearActividad',
    component: CrearActividad
  },
  {
    path: '/ConsultarActividad',
    name: 'ConsultarActividad',
    component: ConsultarActividad
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
