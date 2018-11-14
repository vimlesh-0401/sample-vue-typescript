import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations  } from './mutations';

import { RootState } from '../../types';
import { LocationState } from './types';

export const state: LocationState = {
  list: [],
  error: false,
};

const namespaced: boolean = true;

export const location: Module<LocationState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
