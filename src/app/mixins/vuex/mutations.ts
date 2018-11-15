import { MutationTree } from 'vuex';
import { MixinState, LocationState } from './types';

export const mutations: MutationTree<MixinState> = {
  sampleLocationLoaded(state, payload: any) {
    const location: LocationState = {list: payload, error: false};
    state.location = location;
  },

  locationError(state) {
    const location: LocationState = {list: [], error: true};
    state.location = location;
  },
};
