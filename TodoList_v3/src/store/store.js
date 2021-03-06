import Vue from 'vue'
import Vuex from 'vuex'

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
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
          },
          removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
          },
          toggleOneItem(state, payload) {
            //todoItem.completed = !todoItem.completed; -> 안티패턴
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
          },
          clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
          },
    }
});