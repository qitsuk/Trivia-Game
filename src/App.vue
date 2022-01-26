<script setup>

// <router-link to='/questions' active-class="active">Questions TEST</router-link>
// <router-link to='/results' active-class="active">Results TEST</router-link>
// These two belong in template, if they should even be there, but again. VS code goes nuts, when I attempt
// normal html comments.
</script>


<template>

  <router-view />
</template>

<style>
html,
body {
  margin: 0px;
  background-image: url("assets/bg.jpg");
  background-size: cover;
}
.active {
  color: green;
}
</style>
