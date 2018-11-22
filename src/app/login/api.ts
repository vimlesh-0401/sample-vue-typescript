import { HTTP } from '../../http';

export const api = {
  getServerStatus(params: any) {
    return HTTP.get('https://randomuser.me/api/', {responseType: 'json'});
  },
};
