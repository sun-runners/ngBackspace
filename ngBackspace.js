(function(angular) {
  angular.module('ngBackspace', ['ng'])
  .directive("ngBackspace", function ($rootScope, $timeout) {
		return {
      link: function (scope, element, attrs) {
        // Listen to keypress event
         var timeout_backspace;
         angular.element(element).bind("keydown keypress", function(event) {
           // Set model
           var model
           if(scope.$eval(attrs.ngBackspaceModel)) model = scope.$eval(attrs.ngBackspaceModel);
           else model = scope;

           // When Backspace key is pressed
           if (event.which === 8) {
             // $backspace 가 false 나 undefined 일때만 작동
             // ( 연속해서 true 로 멈춰있는 경우 방지 )
             if(!model.$backspace){
               if(timeout_backspace) $timeout.cancel(timeout_backspace);
               // Set $backspace true and execute ng-backspace
               scope.$apply(function() {
                 model.$backspace = true;
                 model.$backspaced = true;
                 scope.$eval(attrs.ngBackspace);
               });

               // Set $backspace false after duration
               var duration = Number(attrs.ngBackspaceDuration);
               if(!(duration>=0)) duration = 100;
               timeout_backspace = $timeout(function(){
                 model.$backspace = false;
               }, duration);
             }
             event.preventDefault();
           }
         });
      },
			scope:false,
			restrict:"EA"
		};
	});
})(angular);
