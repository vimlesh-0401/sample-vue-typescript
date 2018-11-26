import { ActionTree } from 'vuex';
import { MixinState } from './types';
import { RootState } from '@/app/types';
import { api } from '../api';
export const actions: ActionTree<MixinState, RootState> = {

  locationData({commit}): any {
    return api.getLocation({}).then((response: any) => {
      commit('sampleLocationLoaded', response.data);
    }).catch((error) => {
      commit('locationError');
    });
  },

  feedData({commit}): any {
    return api.getFeeds().then((response: any) => {
      commit('sampleFeedsLoaded', response.data);
    }).catch((error) => {
      commit('sampleFeedsError');
    });
  },

  quoteData({commit}): any {
    return api.getQuote().then((response) => {
      commit('sampleQuoteLoaded', response.data);
    }).catch((error) => {
      commit('sampleQuoteError');
    });
  },
};
