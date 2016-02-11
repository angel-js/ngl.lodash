angular.module('ngl.lodash', [])

.factory('lodash', function ($window) { return $window.lodash; })
.factory('_', function (lodash) { return lodash; });
