import { ActionTree } from 'vuex';
import { JambState } from './types';
import { RootState } from '@/app/types';
import { api } from '../api';
export const actions: ActionTree<JambState, RootState> = {
  pickets({commit}): any {
    api.fetchPickets({}).then((response: any) => {
      commit('sampleDataLoaded', response);
    });
  },

  getRandomJoke({commit}): any {
    api.fetchJoke().then((response: any) => {
      commit('sampleJokeLoaded', response);
    });
  },

  numberGame({commit}): any {
    const rand = Math.random() * 10;
    const num: number = parseInt(`${rand}`, 10);
    api.fetchFact(num).then((response: any) => {
      commit('numberFact', response.data);
    });
  },
};
