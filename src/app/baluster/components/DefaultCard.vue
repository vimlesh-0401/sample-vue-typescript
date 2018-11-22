<template>
  <div>
    <h4> <b>Default:</b> Default Card</h4>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  
  @Component
  export default class DefaultCard extends Vue {
    public created() {
      console.log('default created.');
    }
  }
</script>
