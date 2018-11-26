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
  import { Action } from 'vuex-class';
  const namespace = 'jamb';

  @Component
  export default class BalusterMasterCard extends Vue {
    @Action('pickets', {namespace}) public pickets: any;
    @Action('getRandomJoke', {namespace}) public getRandomJoke: any;
    @Action('numberGame', {namespace}) public numberGame: any;
    public created() {
      this.pickets();
      this.getRandomJoke();
      this.numberGame();
    }
  }
</script>
