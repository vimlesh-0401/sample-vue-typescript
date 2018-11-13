import { HTTP, CLIENT } from '../../http';

export const api = {
  getServerStatus(params: any) {
    params.client_id = CLIENT.client_id;
    params.client_secret = CLIENT.client_secret;
    params.scope = CLIENT.scope;

    return HTTP.get('https://randomuser.me/api/', {responseType: 'json'});
  },
};
