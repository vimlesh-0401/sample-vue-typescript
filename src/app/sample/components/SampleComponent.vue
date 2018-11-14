<template>
  <div>
    <b-card tag="article"
            style="max-width: 100%;"
            class="mb-2">
      <p class="card-text">
        {{message}}
      </p>
      <b-button href="/user-login" variant="primary">Second Module</b-button>
    </b-card>
    <b-card tag="article" style="max-width: 100%" class="mb-2">
      <b-table stacked :items="list" caption-top>
        <template slot="table-caption">
          Countries list
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import { State, Action, Getter } from 'vuex-class';
  import { SampleState } from '../vuex/types';
  import { Location } from '@/app/mixins/mixin/location';
  import { Mixins } from 'vue-mixin-decorator';
  const namespace: string = 'sample';

  @Component
  export default class SampleComponent extends Mixins<Location>(Location) {
    @Action('sampleData', {namespace}) private sampleData: any;
    @State('sample') private sample!: SampleState;
    @Getter('message', {namespace}) private message!: string;

    private mounted() {
      this.sampleData();
    }
  }
</script>
