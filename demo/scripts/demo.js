'use strict';

angular.module('app')
	.controller('DemoCtrl', function ($scope, $rootScope, $timeout) {
		$scope.message_index = 0;

		var granimInstance = new Granim({
		   element: '#granim-canvas',
			 direction: 'radial',
		   name: 'granim',
		   opacity: [1, 1],
		   states : {
					"default-state": {
						gradients: [
							['#F8BBD0', '#F48FB1'],
							['#F06292', '#EC407A'],
							['#EC407A', '#F06292'],
							['#F48FB1', '#F8BBD0']
						]
					}
		   }
		});
});
