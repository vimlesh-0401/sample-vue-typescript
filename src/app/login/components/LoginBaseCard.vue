<template>
  <div>
    <h2> {{name}} </h2>
    <h2>{{email}}</h2>
    <p>
      <a href="/sample-component">First Module</a>
    </p>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { State, Action, Getter } from 'vuex-class';
  import { LoginState, User} from '../vuex/types';
  const namespace: string = 'login';

  @Component
  export default class LoginBaseCard extends Vue {
    @State('login') private login!: LoginState;
    @Action('fetchData', {namespace}) private fetchData: any;
    @Getter('userEmail', {namespace}) private userEmail!: string;

    private mounted() {
      this.fetchData();
    }

    get email() {
      const user = this.login && this.login.user;
      return user && user.email;
    }

    get name() {
      const user = this.login && this.login.user;
      return user && user.name;
    }
  }
</script>