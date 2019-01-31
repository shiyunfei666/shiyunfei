import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './modules/state.js';
import getters from './modules/getters.js';
import mutations from './modules/mutations.js';
import actions from './modules/actions.js';

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
 
export default store;