(function() {
    'use strict';
  
    angular.module('zetaFood').controller('FoodListController', FoodListController);
  
    /** @ngInject */
    function FoodListController(foodService, $q, $scope, $state) {
        var vm = this;
        (function getShopByShopId() {
            foodService.getFoodList().then(function(response) {
                return vm.foodList = response.data;
            })
        })();

        vm.noOfOrder = foodService.getNoOfOrder();

        $scope.setSelectedFood = function(food) {
            localStorage.setItem("selectedFood", JSON.stringify(food));
            
            $state.go('food');
        }
    }
})();