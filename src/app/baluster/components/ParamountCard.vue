<template>
  <div>
    <b-card bg-variant="secondary"
      text-variant="white"
      header="Joke of the day!"
      class="text-center">
      <p class="card-text">{{sampleJoke}}</p>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { Getter } from 'vuex-class';

  @Component
  export default class ParamountCard extends Vue {
    @Getter('sampleJoke', {namespace: 'jamb'}) public sampleJoke!: string;
    public created() {
      // console.log('paramount created.');
    }
  }
</script>
