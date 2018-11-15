import { HTTP, CLIENT } from '../../http';

export const api = {
  getLocation(params: any) {
    return HTTP.get('https://restcountries.eu/rest/v2/regionalbloc/SAARC', {responseType: 'json'});
  },

  getFeeds() {
    return HTTP.get('http://www.flickr.com/services/feeds/photos_public.gne?tags=soccer', { responseType: 'json'});
  },
};
