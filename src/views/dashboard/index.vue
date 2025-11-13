<script setup>
import { useMeStore } from '../../stores/me';

const meStore = useMeStore();
</script>

<template>

  <div>
    Dashboard
    <br></br>
    <pre>{{ meStore.user }}</pre>
    <br></br>
    ta logado? {{ meStore.isLoggedIn }}
  </div>
</template>
