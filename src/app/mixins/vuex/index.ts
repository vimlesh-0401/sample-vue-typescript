import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations  } from './mutations';

import { RootState } from '../../types';
import { MixinState } from './types';

export const state: MixinState = {
  location: undefined,
  feed: undefined,
  locations: [],
  feeds: [],
};

const namespaced: boolean = true;

export const location: Module<MixinState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
