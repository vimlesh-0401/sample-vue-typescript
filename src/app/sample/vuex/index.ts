import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations  } from './mutations';

import { RootState } from '../../types';
import { SampleState } from './types';

export const state: SampleState = {
  message: '',
  error: false,
};

const namespaced: boolean = true;

export const sample: Module<SampleState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
