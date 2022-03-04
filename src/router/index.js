import Vue from 'vue'
import VueRouter from 'vue-router'
import OkeanosDapp from '@/components/OkeanosDapp.vue'
import OkeanosExplorer from '@/components/OkeanosExplorer.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/OkeanosDapp' },
  { path: '/OkeanosDapp', component: OkeanosDapp },
  { path: '/OkeanosExplorer', component: OkeanosExplorer }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
