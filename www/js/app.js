angular.module('App', ['ngRoute', 'App.services', 'App.controllers', 'pascalprecht.translate'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        .otherwise({redirectTo: '/'});

        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph',
            'main': 'Main section',
            'view': 'view section'
        });

        $translateProvider.translations('de', {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Paragraph de',
            'main': 'Main section de',
            'view': 'view section de'
        });

        $translateProvider.preferredLanguage('en');
    });
