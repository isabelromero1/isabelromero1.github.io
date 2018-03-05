'use strict';

var menuToggle = new Vue({
  el: '.menu-toggle',
  data: {
    active: false
  },
  methods: {
    showMenu: function showMenu() {
      this.active = !this.active;
      menu.active = !menu.active;
      console.log("Fui cliqueado");
    }
  }
});

var menu = new Vue({
  el: '.primary-menu',
  data: {
    active: false
  }
});