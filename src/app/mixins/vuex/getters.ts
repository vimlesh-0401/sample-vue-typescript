import { GetterTree } from 'vuex';
import { MixinState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<MixinState, RootState> = {
  list(state): any {
    const { location } = state;
    return location && location.list.map((l: any) => {
      return { name: l.name, capital: l.capital, population: l.population, region: l.region };
    });
  },
  sliderList(state): any {
    const {location} = state;
    return location && location.list.map((l: any) => {
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
