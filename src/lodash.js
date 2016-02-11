angular.module('ngl.lodash', [])

.factory('lodash', function ($window) { return $window.lodash; })
.factory('_', function ($window) { return $window.lodash; });
