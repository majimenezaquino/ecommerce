import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store'
Vue.use(Router);

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    //Account.vue
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Account.vue'),
    },

  

    //paginas de errores
    {
      path: '*',
      name: 'page404',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/error/page404.vue'),
    },
  ],
});


router.beforeEach((to, from, next) => {
  if (to.meta.not_allow_login) {
      if (!store.getters.isLoggedIn) {
          next();
      } else {
          next("dashboard");
          return;
      }
  }

  if (to.meta.requiresAuth) {
      if (store.getters.isLoggedIn) {
          next();
      } else {
          next("login");
          return;
      }
  } else {
      next();
  }

});

export default router;