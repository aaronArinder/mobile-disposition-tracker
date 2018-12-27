import Vue from 'nativescript-vue'

/*
 * filters {Object}: an object whose keys are filter names, and whose values are
 *   functions that do the actual filtering.
 * */
const filters = {
  date: Vue.filter('date', (date) => {
    // undef first load
    if (!date) return;
    // Purpose: remove the time zone.
    // Converts date into a string, splits the string at the spaces, splice
    // keeps items 0-5 (removes the time zone), rejoins at the spaces into a
    // string.
    return date.toString().split(' ').splice(0, 5).join(' ');
  }),
};

export default filters;
