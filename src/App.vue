<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Sample App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item v-if="menus.sample" href="/sample-component">Sample Component</b-nav-item>
          <b-nav-item v-if="menus.login" href="/user-login">Login Component</b-nav-item>
          <b-nav-item v-if="menus.baluster" href="/baluster">Baluster</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- navbar-1.vue -->
    <router-view/>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Route } from 'vue-router';
  import { State, Action, Getter } from 'vuex-class';
  import { AppState } from '@/app/types';

  @Component({
    beforeRouteUpdate(to: Route, from: Route, next) {
      next();
    },
  })
  export default class App extends Vue {
    @State('rootState') private appState!: AppState;
    @Getter('getDefaultState', {namespace: 'rootState'}) private menus: any;
  }
</script>

<style scoped lang="scss">
@import "~/scss/app.scss";
</style>
