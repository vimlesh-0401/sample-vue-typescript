import { ActionTree } from 'vuex';
import { MixinState } from './types';
import { RootState } from '@/app/types';
import { api } from '../api';
export const actions: ActionTree<MixinState, RootState> = {
  locationData({commit}): any {
    api.getLocation({}).then((response: any) => {
      commit('sampleLocationLoaded', response.data);
    });
  },

  feedData({commit}): any {
    return api.getFeeds().then((response: any) => {
      commit('sampleFeedsLoaded', response.data);
    });
  },
  quoteData({commit}): any {
    return api.getQuote().then((response) => {
      commit('sampleQuoteLoaded', response.data);
    });
  },
};
