ngl.lodash
==========

Angular 1.x bindings to [lodash](https://github.com/lodash/lodash)

Install
-------

    bower install ngl.lodash

Include the sources

```html
<script src="bower_components/lodash/lodash.js"></script>
<script src="bower_components/ngl.lodash/src/lodash.js"></script>
```

Add `ngl.lodash` to your app dependencies

```js
angular.module('app', [
  'ngl.lodash'
]);
```

API
---

### `_` service

Publishes the global `_` exposed by **lodash** into angular's DI system

```js
angular.module('app', ['ngl.lodash'])
.directive('main', function (_) {
  return function (scope) {
    scope.data = _.map([1, 2, 3], function (value) { return value * 2; });
  };
});
```

### `lodash` service

Alias to `_` service

Alternatives
------------

General purpose helper libraries checked out:

  * [underscore](https://github.com/jashkenas/underscore)
  * [lazy.js](https://github.com/dtao/lazy.js)
  * [ramda](https://github.com/ramda/ramda)
  * [lodash](https://github.com/lodash/lodash)

All the alternatives have similar APIs, are well documented,  unit tested and
available through the popular package managers `npm` and `bower`

`lodash` has been chosen for being modular, actively mantained and because
implements the features from all others
