import { ActionTree } from 'vuex';
import { SampleState } from './types';
import { RootState } from '@/app/types';
import { api } from '../api';
export const actions: ActionTree<SampleState, RootState> = {
  sampleData({commit}): any {
    api.getMessage({}).then((response: any) => {
      commit('sampleDataLoaded', response.data.slip.advice);
    });
  },
};
