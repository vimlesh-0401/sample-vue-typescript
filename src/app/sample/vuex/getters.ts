import { GetterTree } from 'vuex';
import { SampleState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<SampleState, RootState> = {
  message(state): string {
    const {message} = state;
    return message;
  },
};
