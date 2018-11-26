import {
  LoginBaseCard,
} from './components';

export default [
  {
    path: '/user-login',
    component: LoginBaseCard,
    name: 'userLogin',
    meta: { changeRoot: true, menus: { baluster: true, login: false, sample: true } },
  },
];
