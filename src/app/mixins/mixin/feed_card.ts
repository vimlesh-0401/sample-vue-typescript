import { Mixin } from 'vue-mixin-decorator';
import Vue from 'vue';
import { Action, State, Getter } from 'vuex-class';
import { MixinState, QuoteState } from '../vuex/types';

@Mixin
export class FeedCard extends Vue {
  @State('mixins') private mixin!: MixinState;
  @Action('feedData', {namespace: 'mixins'}) private feedData: any;
  @Action('quoteData', {namespace: 'mixins'}) private quoteData: any;
  @Getter('getQuoteState', {namespace: 'mixins'}) private quote!: QuoteState;
  public created() {
    this.feedData().then(() => {
      this.quoteData();
    });
  }
}
