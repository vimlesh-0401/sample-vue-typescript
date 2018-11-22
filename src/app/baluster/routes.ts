import { DefaultCard, BalusterMasterCard, ParamountCard, PronouncementCard } from './components';

export default [
  {
    path: '/baluster',
    component: BalusterMasterCard,
    name: 'baluster',
    children: [
      {
        path: '/',
        components: {
          default: DefaultCard,
          paramount: ParamountCard,
          pronouncement: PronouncementCard,
        },
      },
    ],
  },
];
