import { ActionTree } from 'vuex';
import { LocationState } from './types';
import { RootState } from '@/app/types';
import { api } from '../api';
export const actions: ActionTree<LocationState, RootState> = {
  locationData({commit}): any {
    api.getLocation({}).then((response: any) => {
      commit('sampleLocationLoaded', response.data);
    });
  },
};
