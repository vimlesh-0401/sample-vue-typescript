import { GetterTree } from 'vuex';
import { LocationState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<LocationState, RootState> = {
  list(state): any {
    return state && state.list.map((l: any) => {
      return { name: l.name, capital: l.capital, population: l.population, region: l.region };
    });
  },
  sliderList(state): any {
    return state && state.list.map((l: any) => {
      return {
        name: l.name,
        flag: l.flag,
        info: {
          capital: l.capital,
          population: l.population,
          region: l.region,
          languages: l.languages.map((lang: any) => lang.name).join(', '),
          nativeName: l.nativeName,
        },
      };
    });
  },
};
