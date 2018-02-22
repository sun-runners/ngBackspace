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
<script src=".bower_components/ng-backspace/ngBackspace.min.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngBackspace/v1.0.2/ngBackspace.js"></script>
```
or
```
<script src="https://cdn.rawgit.com/KimSunWook/ngBackspace/v1.0.2/ngBackspace.min.js"></script>
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
  ng-backspace="message = 'backspace pressed'" // Invoked when you press the Backspace key
  ng-backspace-model="model" // If you do not put object, $backspace and $backspaced values ​​are stored in scope.
  ng-backspace-duration="1000" // The value of $ backspace lasts true and the default value is 100 (ms).
  ng-class="[
    {'backspace_classes':model.$backspace}, // The value of $backspace becomes true on click and turns false after duration (ms).
    {'backspaced_classes':model.$backspaced} // The value of $backspaced is true when clicked and does not change.
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
