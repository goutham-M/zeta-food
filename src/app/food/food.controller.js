(function() {
    'use strict';
  
    angular.module('zetaFood').controller('FoodController', FoodController);
  
    /** @ngInject */
    function FoodController(foodService, $q, $scope, $state) {
        var vm = this;
        vm.od = 1;
        (function getSelectedFood() {
            vm.food = JSON.parse(localStorage.getItem("selectedFood"));
            vm.order = foodService.getNoOfOrder();
        })();

        vm.nav = function() {
            $state.go('food-list');
        }
        vm.increaseOrder = function() {
            vm.od++;
            vm.order++;
            foodService.setNoOfOrder(vm.order);
        }

        vm.decreaseOrder = function() {
            if(vm.od < 1) {
                return;
            }
            vm.od--;
            vm.order--;
            foodService.setNoOfOrder(vm.order);
        }

        
    }
})();