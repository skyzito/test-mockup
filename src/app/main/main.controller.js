(function() {
  'use strict';

  angular
    .module('testMockup')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http) {
        var vm = $scope;
        vm.model = {};
        vm.radioQuestion = {};
        vm.formStarWars = {};
        vm.formGameOfThrones = {};
        vm.formFood = {};
        vm.steps = [
            {
                templateUrl: '/app/step1/step1.html',
                hasForm: true
            },
            {
                templateUrl: '/app/step2/step2.html',
                hasForm: true
            },
            {
                templateUrl: '/app/step3/step3.html',
                hasForm: true
            },
            {
                templateUrl: '/app/step4/step4.html',
                hasForm: true
            },
            {
                templateUrl: '/app/result/result.html'
            }
        ];

        function getStarWars() {
          $http.get("http://www.omdbapi.com/?apikey=bd9be61b&s=Star%20Wars:%20Episode")
          .then(function(response) {
              vm.dataStarWars = response.data;
          });
        }

        function getGameOfThrones() {
          $http.get("http://www.omdbapi.com/?apikey=bd9be61b&t=Game%20of%20Thrones")
          .then(function(response) {
              vm.dataGameOfThrones = response.data;
          });
        }

        vm.getGameOfThronesSeason = function(season){
              $http.get("http://www.omdbapi.com/?apikey=bd9be61b&t=Game%20of%20Thrones&Season=" + season)
              .then(function(response) {
                  vm.formGameOfThrones = response.data;
              }); 
         } 

        getStarWars();
        getGameOfThrones();
        vm.getGameOfThronesSeason(1);
  }
})();
