import { GetterTree } from 'vuex';
import { LocationState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<LocationState, RootState> = {
  list(state): any {
    return state && state.list.map((l: any) => {
      return { name: l.name, capital: l.capital, population: l.population, region: l.region };
    });
  },
};
