import { HTTP, CLIENT } from '../../http';

export const api = {
  fetchPickets(params: any) {
    return HTTP.get('https://api.adviceslip.com/advice', {responseType: 'json'});
  },
};
