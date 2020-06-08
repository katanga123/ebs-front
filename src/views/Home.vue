<template>
  <div class="home justify-center items-center">
    <div class="mx-auto max-w-md">
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6"
        role="alert"
        v-if="allErrors.message"
      >
        <strong class="font-bold">{{ allErrors.message }}</strong>&nbsp;
        <ul v-for="(v, k) in allErrors.errors" :key="k">
          <li v-for="error in v" :key="error" class="text-sm">{{ error }}</li>
        </ul>
      </div>

      <div
        class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-6"
        role="alert"
        v-if="success"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
              />
            </svg>
          </div>
          <div>
            <p class="font-bold">{{success}}</p>
          </div>
        </div>
      </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12">
        <div v-if="step === 1">
          <h1 class="text-xl font-semibold mb-4">Step One</h1>
          <div class="mb-4">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="attendees">Attendees:</legend>
            <input
              id="attendees"
              name="attendees"
              type="number"
              min="1"
              v-model="reservation.attendees"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="mb-4">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="date">Date</legend>
            <input
              id="date"
              name="date"
              type="date"
              v-model="reservation.date"
              :min="reservation.date"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="mb-4">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="time">Time</legend>
            <select
              id="time"
              name="time"
              type="time"
              v-model="reservation.time"
              aria-placeholder="Please Select Time"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value selected disabled>Please Select Time</option>
              <option value="1:00">1:00</option>
              <option value="2:00">2:00</option>
              <option value="3:00">3:00</option>
              <option value="4:00">4:00</option>
              <option value="5:00">5:00</option>
              <option value="6:00">6:00</option>
              <option value="7:00">7:00</option>
              <option value="8:00">8:00</option>
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="16:00">16:00</option>
              <option value="16:00">16:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
              <option value="24:00">24:00</option>
            </select>
          </div>

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click.prevent="next()"
          >Next</button>
        </div>
        <div v-if="step === 2">
          <h1 class="text-xl font-semibold mb-4">Step Two</h1>

          <div class="flex">
            <div class="mb-4 mr-2">
              <legend class="block text-gray-700 text-sm font-bold mb-2" for="numtickets">First Name</legend>
              <input
                id="firstName"
                name="firstName"
                type="text"
                v-model="reservation.firstName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="mb-4">
              <legend class="block text-gray-700 text-sm font-bold mb-2" for="numtickets">Last Name</legend>
              <input
                id="lastName"
                name="lastName"
                type="text"
                v-model="reservation.lastName"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div class="mb-4 mr-2">
            <legend
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phoneNumber"
            >Phome Number</legend>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              v-model="reservation.phoneNumber"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="mb-4">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</legend>
            <input
              id="email"
              name="email"
              type="email"
              v-model="reservation.email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 mr-3 px-4 border border-gray-400 rounded shadow"
            @click.prevent="prev()"
          >Previous</button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click.prevent="submit()"
          >Complete Reservation</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      step: 1,
      reservation: {
        attendees: 1,
        date: new Date().toISOString().slice(0, 10),
        time: null,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null
      },
      success: ""
    };
  },
  computed: mapGetters(["allErrors"]),
  methods: {
    ...mapActions(["addReservation"]),
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      this.reservation = {
        attendees: this.reservation.attendees,
        date: this.reservation.date,
        time: JSON.stringify(this.reservation.time),
        phoneNumber: this.reservation.phoneNumber,
        email: this.reservation.email,
        name: this.reservation.firstName + " " + this.reservation.lastName
      };
      // Need to add success message
      this.addReservation(this.reservation);
    }
  }
};
</script>
