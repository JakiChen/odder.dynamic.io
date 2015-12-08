// 'oohDear App' 1.0.0
// 'oohDear' is the name of this angular module example (also set in a <html> attribute in index.html)
// 'oohDear.services' is found in services.js
// 'oohDear.controllers' is found in controllers.js
angular.module('oohDear', [
							'ionic', 
							'oohDear.controllers', 
							'oohDear.services'
						  ])

.directive('noScroll', function($document) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  };
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   //Cover template
  .state('oohdear', {
      url: "/oohdear",
      templateUrl: "templates/oohdear.html",
      controller: 'oohdearCtrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/oohdear');
});
