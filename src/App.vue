<script setup>

import { ref, reactive} from 'vue';

</script>


<template>
  <router-link to='/questions' active-class="active">Questions</router-link>
  <router-link to='/results' active-class="active">Results</router-link>
  <router-view/>
  
 
</template>

<style>
.active{color:green
}
</style>
