import { HTTP, CLIENT } from '../../http';

export const api = {
  fetchPickets(params: any) {
    return HTTP.get('https://api.adviceslip.com/advice', {responseType: 'json'});
  },

  fetchJoke() {
    return HTTP.get('https://api.chucknorris.io/jokes/random', {responseType: 'json'});
  },

  fetchFact(num: number) {
    return HTTP.get(`http://numbersapi.com/${num}`);
  },
};
