import { SampleComponent } from './components';
import { Route } from 'vue-router';

export default [
  {
    path: '/sample-component',
    component: SampleComponent,
    name: 'sample.component',
    beforeEnter: (to: Route, from: Route, next: any) => {
      next();
    },
    meta: { changeRoot: true, menus: { baluster: true, login: true, sample: false } },
  },
  {
    path: '',
    component: SampleComponent,
    redirect: '/sample-component',
  },
];
