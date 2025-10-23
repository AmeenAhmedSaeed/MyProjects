import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import ContactusView from '../views/ContactusView.vue'
import Subnewsviews from '../components/news/SubNewsView.vue'
import MarketingView from '../views/MarketingView.vue'
import NotFound from '../views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/news',
    name: "NewsView",
    component: NewsView,
  },
  {
    path: '/news/:id', 
    component: Subnewsviews,
  },
  {
    path: '/contactus',
    name: 'contactus',
    component: ContactusView
  },
  {
    path: '/marketingview',
    name: 'marketingview',
    component: MarketingView
  },
  {
    path: "/404",
    alias: "*",
    name: "notfound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
