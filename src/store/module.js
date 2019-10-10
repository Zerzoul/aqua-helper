import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {state} from './state';
import {getters} from './getters';
import {mutations} from './mutations';
import {actions} from './actions';

export const store = new Vuex.Store({
    namespaced: true,
    state,
    getters,
    mutations,
    actions
})