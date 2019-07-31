(function () {
  'use strict';

  angular
    .module('zetaFood')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('food-list', {
      url: '^/food-list',
      templateUrl: 'app/food/foodlist.html',
    })
    .state('food', {
      url: '^/food',
      templateUrl: 'app/food/food.html',
    });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/food-list');
  }
})();
