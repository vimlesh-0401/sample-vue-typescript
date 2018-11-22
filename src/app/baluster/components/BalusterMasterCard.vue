<template>
  <div>
    <router-view></router-view>
    <router-view name="paramount"></router-view>
    <router-view name="pronouncement"></router-view>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component
  export default class BalusterMasterCard extends Vue {
    public created() {
      console.log('base baluster card....');
    }
  }
</script>
