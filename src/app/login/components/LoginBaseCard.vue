<template>
  <div>
    <b-card class="mb-2">
      <b-form>
        <b-row class="my-1">
          <b-col sm="3"><label for="type-email">User Name</label></b-col>
          <b-col sm="9"><b-form-input :value="email" id="type-email" type="text" placeholder="Your email" disabled></b-form-input></b-col>
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
    <b-card :title="quote.author" :sub-title="quote.category">
      <p class="card-text">
        {{quote.quote}}
      </p>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { State, Action, Getter } from 'vuex-class';
  import { LoginState, User} from '../vuex/types';
  import { FeedCardMixin } from '@/app/mixins';
  import { Mixins } from 'vue-mixin-decorator';

  const namespace: string = 'login';

  @Component
  export default class LoginBaseCard extends Mixins<FeedCardMixin>(FeedCardMixin) {
    @State('login') private login!: LoginState;
    @Action('fetchData', {namespace}) private fetchData: any;
    @Getter('name', {namespace}) private name!: string;
    @Getter('email', {namespace}) private email!: string;

    private data() {
      return {
        username: '',
        password: '',
      };
    }

    private mounted() {
      this.fetchData();
    }
  }
</script>