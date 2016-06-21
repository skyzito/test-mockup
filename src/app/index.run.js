(function() {
  'use strict';

  angular
    .module('testMockup')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
