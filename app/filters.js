import Vue from 'nativescript-vue'

const filters = {
  date: Vue.filter('date', (date) => {
    // undef first load
    if (!date) return;
    return date.toString().split(' ').splice(0, 5).join(' ');
  }),
};

export default filters;

