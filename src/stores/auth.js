import { defineStore } from "pinia";
import axios from "axios";
import { useMeStore } from "./me";

export const useAuthStore = defineStore("auth", {
  state: () => ({}),
  actions: {
    async sanctum() {
      return await axios.get('sanctum/csrf-cookie')
    },
    async login(email, password) {
      try {
        return await axios.post("api/login", {
          email,
          password,
        })
          .then((response) => {
            const meStore = useMeStore()
            meStore.user = response.data.data
          })
      } catch (error) {
        console.error(error.response.data);
        throw error;
      }
    },
    async register(firstName, email, password) {
      return await axios.post("api/register", {
        first_name: firstName,
        email,
        password,
      })
    },
  }

});
