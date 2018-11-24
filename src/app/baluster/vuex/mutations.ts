import { MutationTree } from 'vuex';
import { JambState } from './types';

export const mutations: MutationTree<JambState> = {
  sampleDataLoaded(state, payload: any) {
    const {advice} = payload.data.slip;
    state.message = advice;
    state.error = false;
  },

  sampleError(state) {
    state.error = true;
    state.message = '';
    state.joke = '';
  },

  sampleJokeLoaded(state, payload: any) {
    const joke = payload.data.value;
    state.joke = joke;
  },

  numberFact(state, fact: string) {
    state.fact = fact;
  },
};
