angular.module('ngl.lodash', [])

.factory('_', function ($window) { return $window._; })
.factory('lodash', function (_) { return _; });
