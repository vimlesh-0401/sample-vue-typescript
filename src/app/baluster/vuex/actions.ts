import { ActionTree } from 'vuex';
import { JambState } from './types';
import { RootState } from '@/app/types';
import { api } from '../api';
export const actions: ActionTree<JambState, RootState> = {
  pickets({commit}): any {
    api.fetchPickets({}).then((response: any) => {
      console.log(response);
    });
  },
};
