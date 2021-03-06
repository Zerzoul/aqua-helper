import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import {state} from './state';
import {getters} from './getters';
import {mutations} from './mutations';
import {actions} from './actions';

export default new Vuex.Store({
    plugins: [createPersistedState()],
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
})