import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
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
            this.user = response.data.data
            console.log(response);
          })
      } catch (error) {
        console.error(error.response.data);
        throw error;
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state?.user?.id
  },
});
