<template>
  <div>
    <b-card class="mb-2">
      <b-form>
        <b-row class="my-1">
          <b-col sm="3"><label for="type-email">User Name</label></b-col>
          <b-col sm="9"><b-form-input :value="email" id="type-email" type="text" disabled></b-form-input></b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3"><label for="type-password">Password</label></b-col>
          <b-col sm="9"><b-form-input v-model="password" id="type-password" placeholder="*************" type="password"></b-form-input></b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="12">
            <br/>
            <b-button size="sm" variant="secondary">Login</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
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

    private data() {
      return {
        username: '',
        password: '',
      };
    }

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