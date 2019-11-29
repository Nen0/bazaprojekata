(function() {
  'use strict';

  angular
    .module('projekti')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Projekti',
      state: 'projekti',
      roles: ['*']
    });

  Menus.addMenuItem('topbar', {
      title: 'Programi',
      state: 'programi',
      roles: ['*']
    });

    Menus.addMenuItem('topbar', {
      title: 'Istraživanja',
      state: 'istrazivanja',
      roles: ['*']
    });

     Menus.addMenuItem('topbar', {
      title: 'Kontakt',
      state: 'Kontakt',
      roles: ['*']
    });



   /* // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'projekti', {
      title: 'Lista',
      state: 'projekti.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'projekti', {
      title: 'Dodaj',
      state: 'projekti.create',
      roles: ['user', 'admin']
    });*/
  }
})();