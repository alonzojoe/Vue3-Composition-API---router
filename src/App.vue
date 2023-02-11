<script  setup>
import Nav from './views/Nav.vue';
import {RouterView} from 'vue-router'
</script>

<template>
  <div>
    <Nav />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    width: 100%;
    padding: 30px 12%;
  }
</style>