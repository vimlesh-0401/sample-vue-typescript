import Vue from 'vue';
import Router from 'vue-router';
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
router.beforeEach((to: any, from: any, next: any) => {
  next();
});

export default router;
