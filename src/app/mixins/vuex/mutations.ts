import { MutationTree } from 'vuex';
import { LocationState } from './types';

export const mutations: MutationTree<LocationState> = {
  sampleLocationLoaded(state, payload: any) {
    state.list = payload;
    state.error = false;
  },

  locationError(state) {
    state.error = true;
    state.list = [];
  },
};
