import Vue from 'nativescript-vue';
import Vuex from 'vuex';

const sqlite = require('nativescript-sqlite');

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    database: null,
    data: [],
  },
  mutations: {
    init(state, data){
      state.database = data.database;
    },
    load(state, data){
      state.data = [];
      for(var i = data.data.length - 1; i >= 0; i--){
        state.data.push({
          disposition: data.data[i]
        });
      }
    },
    save(state, data){
      state.data.push({
        disposition: data.data.disposition
      });
    },
  },
  getters: {
    getCount: state => state.count,
  },
  actions: {
    init(context){
      (new sqlite('my.db')).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS dispositions (id INTEGER PRIMARY KEY AUTOINCREMENT, disposition TEXT)").then(id => {
          context.commit('init', { database: db });
        }, err => {
          console.log('table creation error', err);
        });
      }, err => {
        console.log('open db err', err);
      })
    },
    insert(context, data){
      context.state.database.execSQL("INSERT INTO dispositions (disposition) VALUES (?)", [data.disposition]).then(id => {
        context.commit("save", { data: data });
      }, err => {
        console.log('insert err', err);
      });
    },
    query(context){
      context.state.database.all("SELECT disposition FROM dispositions", []).then(res => {
        context.commit("load", { data: res });
      }, err => {
        console.log('select err', err);
      })
    }
  },
  strict: true,
});

Vue.prototype.$store = store;
store.dispatch('init');
export default store;
