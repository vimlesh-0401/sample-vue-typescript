import { MutationTree } from 'vuex';
import { LoginState, User } from './types';

export const mutations: MutationTree<LoginState> = {
  profileLoaded(state, payload: User) {
    state.error = false;
    state.user = payload;
  },
  profileError(state) {
    state.user = undefined;
    state.error = true;
  },
};
