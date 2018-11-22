import Vue from 'vue';
import Router, { Route } from 'vue-router';
import { routes } from './app';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

/**
 * Configure pre request checks and router validations.
 * Access control.
 */
router.beforeEach((to: Route, from: Route, next) => {
  next();
});

export default router;
