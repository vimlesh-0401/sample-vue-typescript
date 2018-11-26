<template>
  <div>
    <b-card bg-variant="success"
      text-variant="white"
      header="Number Fact"
      class="text-center">
      <p class="card-text">{{numberFact}}</p>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Getter } from 'vuex-class';

  @Component
  export default class DefaultCard extends Vue {
    @Getter('numberFact', {namespace: 'jamb'}) public numberFact!: string;
  }
</script>
