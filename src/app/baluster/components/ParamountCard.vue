<template>
  <div>
    <b-card bg-variant="secondary"
      text-variant="white"
      header="Paramount"
      class="text-center">
      <p class="card-text">a long, sturdy piece of timber or metal set upright in the ground and used as a support or marker.</p>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  
  @Component
  export default class ParamountCard extends Vue {
    public created() {
      console.log('paramount created.');
    }
  }
</script>
