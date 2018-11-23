import { ActionTree } from 'vuex';
import { LoginState, User } from './types';
import { RootState } from '../../types';
import { api } from '../api';
import { startCase } from 'lodash';

export const actions: ActionTree<LoginState, RootState> = {
  fetchData({commit}): any {
    /**
     * Connect to api methods that actually fetches data from api server.
     * Then commit the result to mutate the state.
     */
    api.getServerStatus({}).then((response: any) => {
      const user = response.data.results[0];
      const u: User = {
        email: user.email,
        name: startCase(`${user.name.title} ${user.name.first} ${user.name.last}`),
        mobile: user.phone,
        userName: user.login.username,
      };
      commit('profileLoaded', u);
    }).catch((error) => {
      commit('profileError');
    });
  },
};
