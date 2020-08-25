'use strict';

/**
 * @ngdoc overview
 * @name bcgApp
 * @description
 * # bcgApp
 *
 * Main module of the application.
 */
angular
  .module('bcgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/additional_resources', {
        templateUrl: 'views/additional_resources.html',
        controller: 'AdditionalResourcesCtrl',
        controllerAs: 'additionalResources'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'calendar'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/subject', {
        templateUrl: 'views/subject.html',
        controller: 'SubjectCtrl',
        controllerAs: 'subject'
      })
      .when('/date', {
        templateUrl: 'views/date.html',
        controller: 'DateCtrl',
        controllerAs: 'date'
      })
      .when('/success_stories', {
        templateUrl: 'views/success_stories.html',
        controller: 'SuccessCtrl',
        controllerAs: 'successStories'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
