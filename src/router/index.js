import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Works from '@/views/Works.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact Me',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.body.classList.add('loading') // show loader
  next()
})

router.afterEach(() => {
  document.body.classList.remove('loading') // hide loader
})

AOS.init({
  duration: 1000,
  once: false,
})
export default router
