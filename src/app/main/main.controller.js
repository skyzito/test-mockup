(function() {
  'use strict';

  angular
    .module('testMockup')
    .controller('MainController', ['$scope', '$http', function($scope, $http) {
        var vm = $scope;
            vm.model = {};
            vm.steps = [
                {
                    templateUrl: '/app/step1/step1.html',
                    title: 'Saving data',
                },
                {
                    templateUrl: '/app/step2/step2.html',
                    hasForm: true,
                },
                {
                    templateUrl: '/app/step3/step3.html',
                    hasForm: true,
                },
                {
                    templateUrl: '/app/step4/step4.html',
                    hasForm: true,
                }
            ];

           vm.getStarWars = function(){
                $http.get("http://www.omdbapi.com/?s=Star%20Wars:%20Episode")
                .then(function(response) {
                    vm.dataStarWars = response.data;
                });
           } 

           vm.getGameOfThrones = function(){
                $http.get("http://www.omdbapi.com/?t=Game%20of%20Thrones")
                .then(function(response) {
                    vm.dataGameOfThrones = response.data;
                });
           } 

           vm.getGameOfThronesSeason = function(season){
                $http.get("http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=" + season)
                .then(function(response) {
                    vm.dataGameOfThronesSeason = response.data;

                    console.log(response.data);
                }); 
           } 

           vm.getStarWars();
           vm.getGameOfThrones();
           // vm.getGameOfThronesSeason(2);
    }]);

  
})();
