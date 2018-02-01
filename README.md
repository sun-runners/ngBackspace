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
Copy-paste the stylesheet <script> into your <body>.

```
<script src=".bower_components/ngBackspace/ngBackspace.js"></script>
```
or
```
<script src=".bower_components/ngBackspace/ngBackspace.min.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngBackspace/master/ngBackspace.js"></script>
```
or
```
<script src="https://raw.githubusercontent.com/KimSunWook/ngBackspace/master/ngBackspace.min.js"></script>
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
  ng-backspace-model="model" // If you do not put object, $backspace and $backspaceed values ​​are stored in scope.
  ng-backspace-duration="1000" // The value of $ backspace lasts true and the default value is 100 (ms).
  ng-class="[
    {'backspace_classes':model.$backspace}, // The value of $backspace becomes true on click and turns false after duration (ms).
    {'backspace_classes':model.$backspaceed} // The value of $backspaceed is true when clicked and does not change.
  ]">
```

Once backspace is pressed

```
$scope.message === 'backspace pressed' // true
$scope.model.$backspace === true // true
$scope.model.$backspaceed === true // true
```

<br/>

Easy!
