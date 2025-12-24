<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Nome</v-label>
      <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">E-mail</v-label>
      <v-text-field variant="outlined" type="email" hide-details color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Senha</v-label>
      <v-text-field variant="outlined" type="password" hide-details color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn color="primary" size="large" block flat @click="register">Cadastrar</v-btn>
    </v-col>
  </v-row>
</template>

<script setup>



// import axios from 'axios';

// function register() {
//   const data = {
//     first_name: 'test',
//     email: 'test3@test.com',
//     password: '12345678A'
//   }

//   axios.post('api/register', data)
// }
</script>
