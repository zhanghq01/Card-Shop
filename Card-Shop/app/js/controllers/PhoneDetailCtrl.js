define(['../services/PhonecatServices'], function() {
    'use strict';
    return ['$scope', '$stateParams', 'PhoneDetail', function($scope, $stateParams, PhoneDetail, angularAMD) {
        $scope.phone = PhoneDetail.get({
            phoneId: $stateParams.phoneId
        }, function(phone) {
            var header = document.querySelector("div[class*='title'][class*='header-item']");
            header.innerHTML = phone.id;
            $scope.mainImageUrl = phone.images[0];
            window.document.title = phone.id;
            
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }];
});