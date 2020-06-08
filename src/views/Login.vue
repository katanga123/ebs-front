<template>
  <div class="login justify-center items-center">
    <div class="mx-auto max-w-md">
      <!-- Form Errors -->
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
        role="alert"
        v-if="form.message"
      >
        <strong class="font-bold">Holy smokes!</strong>&nbsp;
        <span class="block sm:inline">{{ form.message }}</span>
      </div>

      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12">
        <h1 class="text-xl font-semibold mb-4">Login</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">EMAIL</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            v-model="form.email"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">PASSWORD</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="form.password"
            placeholder="******************"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >Sign In</button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2020 Event Booking. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";
import urlService from "./../services/UrlService";
import AuthService from "./../services/AuthService";

export default {
  name: "Login",
  data() {
    return {
      expiredAt: 60 * 24,
      form: {
        email: "",
        password: "",
        success: "",
        message: "",
        errors: []
      }
    };
  },
  methods: {
    async login() {
      await this.$axios
        .post(urlService.loginUrl(), this.form)
        .then(response => {
          AuthService.login(response.data, () => {
            this.$router.replace({ name: "Reservation" });
            window.location.href = "/reservation";
          });
        })
        .catch(error => {
          console.log(error);
          if (typeof error.response.data === "object") {
            this.form.success = "";
            this.form.errors = error.response.data.errors;
            this.form.message = error.response.data.message;
          } else {
            this.form.success = "";
            this.form.errors = ["Something went wrong. Please try again."];
            this.form.message = "";
          }
        });
    }
  }
};
</script>
