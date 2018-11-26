import { GetterTree } from 'vuex';
import { MixinState, QuoteState, CountryState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<MixinState, RootState> = {
  list(state): any {
    const { countries } = state;
    return countries.map((c) => {
      return {
        name: c.name,
        flag: c.flag,
        capital: c.capital,
        population: c.population,
        region: c.region,
        languages: c.languages.join(', '),
        nativeName: c.nativeName,
        area: c.area,
      };
    });
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
