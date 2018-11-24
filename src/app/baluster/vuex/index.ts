import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations  } from './mutations';

import { RootState } from '../../types';
import { JambState } from './types';

export const state: JambState = {
  message: '',
  error: false,
  joke: '',
  fact: '',
};

const namespaced: boolean = true;

export const jamb: Module<JambState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
