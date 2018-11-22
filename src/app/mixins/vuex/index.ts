import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations  } from './mutations';

import { RootState } from '../../types';
import { MixinState } from './types';

export const state: MixinState = {
  feed: undefined,
  quote: undefined,
  country: undefined,
  countries: [],
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
