(function(angular) {
  angular.module('ngBackspace', ['ng'])
  .directive("ngBackspace", ['$rootScope', '$timeout', function ($rootScope, $timeout) {
		return {
      link: function (scope, element, attrs) {

        var getModel = function(){
          // Set model
          var model;
          if(scope.$eval(attrs.ngBackspaceModel)){
            model = scope.$eval(attrs.ngBackspaceModel);
          }
          else{
            if(attrs.ngBackspaceModel){
              scope[attrs.ngBackspaceModel] = {};
              model = scope[attrs.ngBackspaceModel];
            }
            else{
              model = scope;
            }
          }
          return model;
        };

        // Listen to keypress event
         var timeout_backspace;
         angular.element(element).bind("keydown keypress", function(event) {
           // Set model
           var model = getModel();

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
               if(!(duration>=0)) duration = 700;
               timeout_backspace = $timeout(function(){
                 model.$backspace = false;
                 scope.$eval(attrs.ngBackspaceAfter);
               }, duration);
             }
             event.preventDefault();
           }
         });
      },
			scope:false,
			restrict:"EA"
		};
  }]);
})(angular);
