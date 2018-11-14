import { Mixin } from 'vue-mixin-decorator';
import Vue from 'vue';
import { State, Getter, Action } from 'vuex-class';
import { LocationState } from '../vuex/types';

@Mixin
export class Location extends Vue {
  @State('mixins') private location!: LocationState;
  @Action('locationData', {namespace: 'mixins'}) private locationData: any;
  @Getter('list', {namespace: 'mixins'}) private list: any;
  @Getter('sliderList', {namespace: 'mixins'}) private sliderList: any;
  
  private created() {
    this.locationData();
  }
}
