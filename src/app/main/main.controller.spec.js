(function() {
  'use strict';

  describe('Testing objects', function() {
    var $controller;

    beforeEach(function(){
      module('testMockup');
      inject(function(_$controller_){
        $controller = _$controller_;
      });
    });

    it('Should formStarWars is a object', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      expect(angular.isObject($scope.formStarWars)).toBeTruthy();
    });

    it('Should formGameOfThrones is a object', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      expect(angular.isObject($scope.formGameOfThrones)).toBeTruthy();
    });

    it('Should formFood is a object', function() {
      var $scope = {};
      var controller = $controller('MainController', { $scope: $scope });
      expect(angular.isObject($scope.formFood)).toBeTruthy();
    });

    it('Should Steps is a array', function() {
      var $scope = [];
      var controller = $controller('MainController', { $scope: $scope });
      expect(angular.isArray($scope.steps)).toBeTruthy();
    });

  });
})();
