/* Services */
define(function() {
    'use strict';
    var phonecatServices = angular.module('phonecatServices', ['ngResource']);
    phonecatServices.factory('Phone', ['$resource',
        function($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {
                        phoneId: 'phones'
                    },
                    isArray: true
                }
            });
        }
    ]);
    phonecatServices.factory('PhoneDetail', ['$resource',
        function($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {
                        phoneId: 'phones'
                    },
                    isArray: true
                }
            });
        }
    ]);
    
});