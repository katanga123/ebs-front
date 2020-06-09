<template>
  <div class="reservation justify-center items-center mt-10">
    <div class="mx-auto max-w-4xl">
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="px-4 py-2">Date and Time</th>
            <th class="px-4 py-2">Customer</th>
            <th class="px-4 py-2">Status</th>
            <th class="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in allReservations.reservations" :key="reservation.id">
            <td class="border px-4 py-2">
              <ul>
                <li>
                  <font-awesome-icon icon="calendar"/>  
                  <span class="ml-2">{{ reservation.date }}</span>
                </li>
                <li>
                  <font-awesome-icon icon="clock"/>
                    
                  <span class="ml-2">{{ reservation.time }}</span>
                </li>
              </ul>
            </td>
            <td class="border px-4 py-2">
              <ul>
                <li>
                  <font-awesome-icon icon="user"/>  
                  <span class="ml-2">{{ reservation.name }}</span>
                </li>
                <li>
                  <font-awesome-icon icon="envelope"/>  
                  <span class="ml-2">{{ reservation.email }}</span>
                </li>
                <li>
                  <font-awesome-icon icon="phone"/>  
                  <span class="ml-2">{{ reservation.phoneNumber }}</span>
                </li>
              </ul>
            </td>
            <td class="border px-4 py-2">
              In-Progress
            </td>
            <td class="border px-4 py-2">
              <a @click="accept(reservation)" class="cursor-pointer mr-3 bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-2 border-b-4 border-green-700 hover:border-green-500 rounded">Accept</a>
              <a class="cursor-pointer bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded">Decline</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import { mapActions,mapGetters } from "vuex";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faClock, faCalendar, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faClock, faCalendar, faEnvelope, faPhone, faUser)

export default {
  name: "Reservation",
  components: {
    'font-awesome-icon' : FontAwesomeIcon
  },
  data() {
    return{}
  },
  computed: mapGetters(['allReservations']),
  methods:{
    ...mapActions(['fetchReservations','updateReservation']),
    accept(reservation){
      
      const updReservation = {
        attendees: reservation.attendees,
        date: reservation.date,
        email: reservation.email,
        id: reservation.id,
        name: reservation.name,
        phoneNumber: reservation.phoneNumber,
        status_id: 1,
        time: reservation.time,
      }

      this.updateReservation(updReservation)

    },
    decline(){

    }
  },
  created(){
    this.fetchReservations()
  }
};
</script>

<style>
</style>
