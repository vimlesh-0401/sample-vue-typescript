<template>
  <div>
    <b-card tag="article"
            style="max-width: 100%;"
            class="mb-2">
      <p class="card-text">
        {{sample.message}}
      </p>
      <b-button href="/user-login" variant="primary">Second Module</b-button>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { State, Action, Getter } from 'vuex-class';
  import { SampleState } from '../vuex/types';
  const namespace: string = 'sample';

  @Component
  export default class SampleComponent extends Vue {
    @Action('sampleData', {namespace}) private sampleData: any;
    @State('sample') private sample!: SampleState;

    private mounted() {
      this.sampleData();
    }
  }
</script>
