// 'use strict';
// 'use strict';
// /* Controllers */
// var phonecatControllers = angular.module('phonecatControllers', []);
// phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
//     function($scope, Phone) {
// 		debugger
//         $scope.phones = Phone.query();
//         $scope.orderProp = 'age';
//     }
// ]);
define(['../services/PhonecatServices', 'angular-filters'], function() {
    'use strict';
    return ['$scope', 'Phone', function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
    }];
});