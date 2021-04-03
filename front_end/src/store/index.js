import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state:{
       users: []
    },

    actions:{
        createUser: async function(ctx, data) {
            await axios.post(process.env.VUE_APP_CONFURL + '/api/handle-user', data);
        },

        getAllUsers: async function(ctx) {
            const response = await axios.get(process.env.VUE_APP_CONFURL + '/api/handle-user');
            ctx.commit('updateUsers', response.data);
        },

        deleteUser: async function(ctx, data) {
            await axios.post(process.env.VUE_APP_CONFURL + '/api/delete-user', data);
        },

        updateUser: async function(ctx, data) {
            await axios.put(process.env.VUE_APP_CONFURL + '/api/handle-user', data);
        }
    },

    mutations:{
        updateUsers: function(state, data){
            state.users = data;
        },
    },

    getters:{
        users(state){
            return state.users;
        },
    }
})
