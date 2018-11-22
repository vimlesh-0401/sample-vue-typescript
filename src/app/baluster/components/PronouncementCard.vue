<template>
  <div>
    <h3><b>Pronouncement: </b> formal or authoritative announcement or declaration.</h3>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component
  export default class PronouncementCard extends Vue {
    public created() {
      console.log('pronounced created.');
    }
  }
</script>