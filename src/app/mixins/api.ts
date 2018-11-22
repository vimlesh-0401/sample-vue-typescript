import { HTTP, CLIENT } from '../../http';

export const api = {
  getLocation(params: any) {
    return HTTP.get('https://restcountries.eu/rest/v2/regionalbloc/SAARC', {responseType: 'json'});
  },

  getFeeds() {
    return HTTP.get(
      'http://quotesondesign.com//wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    );
  },
  getQuote() {
    return HTTP.get(
      'https://talaikis.com/api/quotes/random/',
    );
  },
};
