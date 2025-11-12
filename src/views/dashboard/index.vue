<script setup>
import { useAuthStore } from '../../stores/auth';

const authStore = useAuthStore();
</script>
<template>

  <div>
    Dashboard
    <br></br>
    <pre>{{ authStore.user }}</pre>
    <br></br>
    ta logado? {{ authStore.isLoggedIn }}
  </div>
</template>
