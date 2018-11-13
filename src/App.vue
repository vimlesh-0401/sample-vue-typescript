<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Sample App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/sample-component">First Module</b-nav-item>
          <b-nav-item href="/user-login">Second Module</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- navbar-1.vue -->
    <router-view/>
  </div>
</template>
<style scoped lang="scss">
@import "~/scss/app.scss";
</style>
