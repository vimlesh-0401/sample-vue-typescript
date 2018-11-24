<template>
  <div>
    <b-card bg-variant="info"
      text-variant="white"
      header="Advice for the day."
      class="text-center">
      <p class="card-text">{{jamb.message}}</p>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import { State } from 'vuex-class';
  import { JambState } from '../vuex/types';

  @Component({})
  export default class PronouncementCard extends Vue {
    @State('jamb') private jamb!: JambState;
    public created() {
      // Created hook.
    }
  }
</script>