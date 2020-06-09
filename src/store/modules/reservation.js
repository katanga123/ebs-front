import urlService from '../../services/UrlService'
import axios from 'axios'

const state = {
    reservations: [],
    errors: [],
}

const getters = {
    allReservations: state => state.reservations,
    allErrors: state => state.errors
}

const actions = {
    async fetchReservations({ commit }) {
        await axios.get(urlService.reservationUrl(), urlService.configAccept())
            .then(response => {
                commit('getReservations', response.data)
            })
    },
    async addReservation({ commit }, data) {
        // can booked even no access token
        await axios.post(urlService.reservationUrl(), data)
            .then(response => {
                commit('newReservation', response.data)
            })
            .catch(errors => {
                commit('getErrors', errors.response.data)
            })
    },

    async updateReservation({commit}, data){
        await axios.put(urlService.reservationUrl() + '/'+ data.id, data, urlService.configContentType())
        .then(response => {
            commit('editReservation', response.data)
        })
    }
}

const mutations = {
    getReservations: (state, reservations) => {
        state.reservations = reservations
    },
    newReservation: (state, reservation) => {
        state.reservations.unshift(reservation);
    },
    getErrors: (state, errors) => {
        state.errors = errors
    },
    editReservation: (state, updReservation) => {
        const index = state.reservations.findIndex(reservation => reservation.id === updReservation.id)
        if(index !== 1){
            state.reservations.splice(index, 1, updReservation)
        }
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}
