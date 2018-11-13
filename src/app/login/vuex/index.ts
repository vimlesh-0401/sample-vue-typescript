import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { RootState } from '../../types';
import { LoginState } from './types';

export const state: LoginState = {
  user: undefined,
  error: false,
};

const namespaced: boolean = true;

export const profile: Module<LoginState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
