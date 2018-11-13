import { MutationTree } from 'vuex';
import { SampleState } from './types';

export const mutations: MutationTree<SampleState> = {
  sampleDataLoaded(state, payload: string) {
    state.message = payload;
    state.error = false;
  },

  sampleError(state) {
    state.error = true;
    state.message = '';
  },
};
