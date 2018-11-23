import { GetterTree, ActionTree, MutationTree, Module } from 'vuex';

export interface RootState {
  version: string;
  loggedIn: boolean;
  count: number;
  menus: any;
}

export interface AppState {
  menus: any;
}

export const state: AppState = {
  menus: {sample: true, login: true, baluster: true},
};

export const getters: GetterTree<AppState, RootState> = {
  getDefaultState(gState): any {
    const {menus} = gState;
    return menus;
  },
};

export const actions: ActionTree<AppState, RootState> = {
  setDefaultState({commit}, menus: any): any {
    if (menus === undefined) {
      menus = {
        sample: true,
        login: true,
        baluster: true,
      };
    }
    commit('setMenuState', menus);
  },
};

export const mutations: MutationTree<AppState> = {
  setMenuState(cState, menus: any) {
    cState.menus = menus;
  },
};

const namespaced: boolean = true;

export const rootState: Module<AppState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
