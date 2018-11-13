<template>
  <div>
    <h1>{{sample.message}}</h1>
    <p>
      <a href="/user-login">Second Module</a>
    </p>
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
