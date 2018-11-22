<template>
  <div>
    <b-card bg-variant="info"
      text-variant="white"
      header="Pronouncement"
      class="text-center">
      <p class="card-text">formal or authoritative announcement or declaration.</p>
    </b-card>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({})
  export default class PronouncementCard extends Vue {

    public created() {
      // Created hook.
    }
  }
</script>