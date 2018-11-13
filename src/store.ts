import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { RootState } from './app/types';
import { vuex } from './app';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: vuex,
  strict: true,
  plugins: [
    createPersistedState({
      key: 'vueScript',
    }),
  ],
};

export default new Vuex.Store<RootState>(store);
