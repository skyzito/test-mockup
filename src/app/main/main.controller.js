(function() {
  'use strict';

  angular
    .module('testMockup')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http) {
        var vm = $scope;
        vm.model = {};
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
          $http.get("http://www.omdbapi.com/?s=Star%20Wars:%20Episode")
          .then(function(response) {
              vm.dataStarWars = response.data;
          });
        }

        function getGameOfThrones() {
          $http.get("http://www.omdbapi.com/?t=Game%20of%20Thrones")
          .then(function(response) {
              vm.dataGameOfThrones = response.data;
          });
        }

        vm.getGameOfThronesSeason = function(season){
              $http.get("http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=" + season)
              .then(function(response) {
                  vm.dataGameOfThronesSeason = response.data;
                  vm.formGameOfThrones = response.data;
              }); 
         } 

        getStarWars();
        getGameOfThrones();

    // activate();

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();
