define(['common'], function(angularAMD) {
    'use strict';
    var timeStamp = new Date().getTime();
    var phonecatApp = angular.module('phonecatApp', ['ui.router', 'ngResource', 'ngRoute', 'ionic']);
    phonecatApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider','$ionicConfigProvider',
        function($stateProvider, $urlRouterProvider, $httpProvider,$ionicConfigProvider) {
            $ionicConfigProvider.platform.ios.tabs.style('standard');
            $ionicConfigProvider.platform.ios.tabs.position('bottom');
            $ionicConfigProvider.platform.android.tabs.style('standard');
            $ionicConfigProvider.platform.android.tabs.position('standard');
            $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.navBar.alignTitle('left');
            $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-chevron-left');
            $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-chevron-left');
            $ionicConfigProvider.platform.ios.views.transition('ios');
            $ionicConfigProvider.platform.android.views.transition('android');
            $stateProvider.state('tab', angularAMD.route({
                url: '/tab',
                templateUrl: function() {
                    return 'partials/tab.html?ts=' + timeStamp
                }
            })).state('tab.phones', angularAMD.route({
                url: '/phones',
                views: {
                    'tab-phone': angularAMD.route({
                        templateUrl: function() {
                            return 'partials/phone-list.html?ts=' + timeStamp;
                        },
                        controllerUrl: 'controllers/PhoneListCtrl'
                    })
                }
            })).state('tab.detail', angularAMD.route({
                url: '/detail/:phoneId',
                views: {
                    'tab-phone': angularAMD.route({
                        templateUrl: function() {
                            return 'partials/phone-detail.html?ts=' + timeStamp;
                        },
                        controllerUrl: 'controllers/PhoneDetailCtrl'
                    })
                }
            }));
            $urlRouterProvider.otherwise('/tab/phones');
            $httpProvider.interceptors.push('timestampMarker');
        }
    ]);
    phonecatApp.factory('timestampMarker', ["$rootScope",
        function($rootScope) {
            var timestampMarker = {
                request: function(config) {
                    $rootScope.loading = true;
                    config.requestTimestamp = new Date().getTime();
                    return config;
                },
                response: function(response) {
                    $rootScope.loading = false;
                    response.config.responseTimestamp = new Date().getTime();
                    return response;
                }
            };
            return timestampMarker;
        }
    ]);
    return angularAMD.bootstrap(phonecatApp);
});