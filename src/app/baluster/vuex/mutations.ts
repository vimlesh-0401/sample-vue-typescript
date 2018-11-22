import { MutationTree } from 'vuex';
import { JambState } from './types';

export const mutations: MutationTree<JambState> = {
  sampleDataLoaded(state, payload: string) {
    state.message = payload;
    state.error = false;
  },

  sampleError(state) {
    state.error = true;
    state.message = '';
  },
};
