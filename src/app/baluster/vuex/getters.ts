import { GetterTree } from 'vuex';
import { JambState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<JambState, RootState> = {
  columns(state): string {
    const {message} = state;
    return message;
  },
};
