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
  },
  {
    path: '',
    component: SampleComponent,
  },
];
