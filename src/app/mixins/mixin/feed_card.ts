import { Mixin } from 'vue-mixin-decorator';
import Vue from 'vue';

@Mixin
export class FeedCard extends Vue {

  public created() {
    console.log('created feed mixin');
  }
}
