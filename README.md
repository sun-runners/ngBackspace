ngBackspace
=======

ngBackspace is an angularjs library that triggers an expression when the backspace key is pressed.

<br/>

DEMO
-------
https://kimsunwook.github.io/ngBackspace

<br/>

INSTALL
-------

```
bower install ng-backspace --save
```

<br/>

Quick start
-------
Copy-paste the ```<script>``` into your ```<body>```.

<br/>

### ngBackspace.js

```
<script src=".bower_components/ng-backspace/ngBackspace.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngBackspace/v1.1.3/ngBackspace.js"></script>
```

<br/>

USAGE
-----

Make sure you include the module 'ngBackspace' in your application config

```
angular.module('myApp', [
  'ngBackspace',
  ...
]);
```

```
<input
  <!-- Invoked when you press the BACKSPACE key -->
  ng-backspace="message = 'BACKSPACE is pressed.'"

  <!-- Called after duration (ms) after pressing the BACKSPACE key. -->
  ng-backspace-after="message = 'BACKSPACE was pressed 1 second ago.'"

  <!-- If you do not put object, $backspace and $backspaceed values ​​are stored in scope. -->
  ng-backspace-model="model"

  <!-- The value of $backspace lasts true and the default value is 700 (ms). -->
  ng-backspace-duration="1000"

  ng-class="[

    <!-- The value of $backspace becomes true on click and turns false after duration (ms). -->
    {'backspace_classes':model.$backspace},

    <!-- The value of $backspaceed is true when clicked and does not change. -->
    {'backspaceed_classes':model.$backspaceed}

  ]">
```

Once backspace is pressed

```
$scope.message === 'backspace pressed' // true
$scope.model.$backspace === true // true
$scope.model.$backspaced === true // true
```

<br/>

Easy!
