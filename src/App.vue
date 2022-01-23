<script setup>
import TriviaHeader from './components/TriviaHeader.vue';


</script>


<template>
  <router-link to='/questions' active-class="active">Questions TEST</router-link>
  <router-link to='/results' active-class="active">Results TEST</router-link>
  <TriviaHeader></TriviaHeader>
  <router-view/>
  
 
</template>

<style>
.active{color:green
}
</style>
