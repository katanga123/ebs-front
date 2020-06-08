<template>
  <div class="home justify-center items-center" >

    <div class="mx-auto max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12">
        <div v-if="step === 1">

          <h1 class="text-xl font-semibold mb-4">Step One</h1>
          <div class="mb-4">
            <legend class="block text-gray-700 text-sm font-bold mb-2" for="attendees">Attendees:</legend>
            <input id="attendees" name="attendees" type="number" min="1" v-model="reservation.attendees" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div class="mb-4">
          <legend class="block text-gray-700 text-sm font-bold mb-2" for="date">Date</legend>
          <input id="date" name="date" type="date" v-model="reservation.date" :min="reservation.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div class="mb-4">
          <legend class="block text-gray-700 text-sm font-bold mb-2" for="time">Time</legend>
          <input id="time" name="time" type="time" v-model="reservation.time" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click.prevent="next()">Next</button>
          
        </div>
        <div v-if="step === 2">
          <h1 class="text-xl font-semibold mb-4">Step Two</h1>
          
          <div class="flex">

            <div class="mb-4 mr-2">
              <legend class="block text-gray-700 text-sm font-bold mb-2" for="numtickets">First Name</legend>
              <input id="firstName" name="firstName" type="text" v-model="reservation.firstName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <div class="mb-4">
              <legend class="block text-gray-700 text-sm font-bold mb-2" for="numtickets">Last Name</legend>
              <input id="lastName" name="lastName" type="text" v-model="reservation.lastName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

          </div>

            <div class="mb-4 mr-2">
              <legend class="block text-gray-700 text-sm font-bold mb-2" for="phoneNumber">Phome Number</legend>
              <input id="phoneNumber" name="phoneNumber" type="text" v-model="reservation.phoneNumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

            <div class="mb-4">
              <legend class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</legend>
              <input id="email" name="email" type="email" v-model="reservation.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>

          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2  mr-3 px-4 border border-gray-400 rounded shadow" @click.prevent="prev()">Previous</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click.prevent="submit()">Complete Reservation</button>
          
        </div>
      </form> 
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      step:1,
      reservation:{
        attendees: 1,
        date: new Date().toISOString().slice(0,10),
        firstName:null,
        lastName:null,
        phoneNumber:null,
        email:null,
      }
    }
  },
  methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      console.log(this.reservation) 
    }
  }
}
</script>
