<template>
  <div>
    <b-card tag="article"
            style="max-width: 100%;"
            class="mb-2">
      <p class="card-text">
        {{message}}
      </p>
      <b-button href="/user-login" variant="primary">Login Component</b-button>
    </b-card>
    <b-card tag="article" style="max-width: 100%" class="mb-2">
      <b-carousel id="carousel1"
        background="#ababab"
        :interval="0"
        v-model="slide"
        controls
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="country in sliderList"
          :key="country.area"
          :caption="country.name"
          img-blank :img-alt="country.name"
        >
          <b-table stacked :items="[country.info]"></b-table>
        </b-carousel-slide>
      </b-carousel>
    </b-card>
    <b-card tag="article" style="max-width: 100%" class="mb-2">
      <b-table stacked :items="list" caption-top>
        <template slot="table-caption">
          Countries list
        </template>
        <template slot="flag" slot-scope="row">
          <img height="30px" :src="row.value"/>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { State, Action, Getter } from 'vuex-class';
  import { SampleState } from '../vuex/types';
  import { LocationMixin } from '@/app/mixins';
  import { Mixins } from 'vue-mixin-decorator';
  const namespace: string = 'sample';

  /**
   * router callback wont be called if you define them inside component class.
   * You need to register them before component resolve.
   */
  @Component({
    beforeRouteEnter: (to, from , next) => {
      next();
    },
  })
  export default class SampleComponent extends Mixins<LocationMixin>(LocationMixin) {
    @Action('sampleData', {namespace}) private sampleData: any;
    @State('sample') private sample!: SampleState;
    @Getter('message', {namespace}) private message!: string;

    private data() {
      return {
        slide: 0,
      };
    }
    private mounted() {
      this.sampleData();
    }
    private onSlideStart(slide: any) {
      console.log('Slide Start: ' + slide);
    }
    private onSlideEnd(slide: any) {
      console.log('Slide End: ' + slide);
    }
  }
</script>

<style lang="scss">
  caption {
    text-align: center !important;
  }
</style>
