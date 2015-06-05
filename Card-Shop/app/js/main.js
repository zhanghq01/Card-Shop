require.config({
    baseUrl: 'js/',
    urlArgs: "ts=" + (new Date()).getTime(),
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '../bower_components/ionic/js/ionic.bundle',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angularAMD': '../bower_components/angularAMD/angularAMD',
        'ngload': '../bower_components/ngload',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-filters': 'filters/filters'
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angular-route': ['angular'],
        'angularAMD': ['angular'],
        'ngload': [ 'angularAMD' ],
        'angular-resource': ['angular'],
        'angular-ui-router': ['angular']
    },
    // kick start application
    deps: ['app']
});