import Vue from 'vue'
import Vuex from 'vuex'

import * as gt from './getters'
import * as mut from './mutations'

Vue.use(Vuex);

const storage = {
    fetch() {//내가만든 function
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = localStorage.length - 1; i >= 0; i--) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server"){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        headerText: 'Todo It!',
        todoItems: storage.fetch(),
  },
  getters: gt,
  mutations: mut,
});