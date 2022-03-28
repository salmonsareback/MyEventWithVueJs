import Vue from 'vue'
import Vuex from 'vuex'

import { createProxy, extractVuexModule } from "vuex-class-component";
import { EventsStore } from './modules/EventsStore';

Vue.use(Vuex)

// Create store
const store =  new Vuex.Store({
  modules:{
    ...extractVuexModule(EventsStore),
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  // modules: {
  // }
})

export default store;

//Create proxy
export const vuex = {
  events: createProxy(store, EventsStore),
};
