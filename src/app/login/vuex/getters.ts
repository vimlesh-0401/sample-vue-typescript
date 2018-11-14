import { GetterTree } from 'vuex';
import { LoginState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<LoginState, RootState> = {

  email(state): string {
    const { user } = state;
    const email = (user && user.email) || '';
    return email;
  },

  name(state): string {
    const { user } = state;
    const name = (user && user.name) || '';
    return name;
  },
};
