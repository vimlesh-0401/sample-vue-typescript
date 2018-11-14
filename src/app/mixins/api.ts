import { HTTP, CLIENT } from '../../http';

export const api = {
  getLocation(params: any) {
    return HTTP.get('https://restcountries.eu/rest/v2/regionalbloc/SAARC', {responseType: 'json'});
  },
};
