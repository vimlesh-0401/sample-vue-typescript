import { GetterTree } from 'vuex';
import { MixinState, QuoteState, CountryState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<MixinState, RootState> = {
  list(state): any {
    const { countries } = state;
    return countries.map((c) => c);
  },
  sliderList(state): any {
    const {countries} = state;
    return countries && countries.map((l: CountryState) => {
      return {
        name: l.name,
        flag: l.flag,
        info: {
          capital: l.capital,
          population: l.population,
          region: l.region,
          languages: l.languages.join(', '),
          nativeName: l.nativeName,
          area: l.area,
        },
      };
    });
  },

  getQuoteState(state): QuoteState {
    const {quote} = state;
    return quote ? quote : {author: '', quote: '', category: ''};
  },
};
