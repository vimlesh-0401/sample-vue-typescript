<template>
  <div>
    <h4> <b>Paramount: </b> a long, sturdy piece of timber or metal set upright in the ground and used as a support or marker.</h4>
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
