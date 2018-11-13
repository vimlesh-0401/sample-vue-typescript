import { GetterTree } from 'vuex';
import { LoginState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<LoginState, RootState> = {
  userEmail(state): string {
    const { user } = state;
    const name = (user && user.name) || '';
    const email = (user && user.email) || '';
    return `${name}<${email}>`;
  },
};
