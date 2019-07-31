(function() {
    'use strict';
  
    angular.module('zetaFood').factory('foodService', foodService);
  
    foodService.$inject = ['$http', '$q', 'URL'];
  
    function foodService($http, $q, URL) {
        var order=0;
        var service = {
            getFoodList: getFoodList,
            setNoOfOrder: setNoOfOrder,
            getNoOfOrder: getNoOfOrder
        }

        return service;
        function getFoodList() {
            var deferred = $q.defer();
            $http.get(URL+'/food.php').then(function(result) {
                deferred.resolve(result);
                }, function() {
                deferred.reject();
                }
            );
            return deferred.promise;
        }

        function setNoOfOrder(val) {
            order = val;
        }

        function getNoOfOrder() {
            return order;
        }


    }
})();