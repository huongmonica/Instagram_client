// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.style('standard')
  $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.search', {
      url: '/search',
      views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SearchCtrl'
        }
      }
    })


  .state('take-picture', {
    url: '/take-picture',
    templateUrl: 'templates/tab-take-picture.html',
    controller: 'TakepictureCtrl'
  })

  .state('tab.heart', {
      url: '/heart',
      views: {
        'tab-heart': {
          templateUrl: 'templates/tab-heart.html',
          controller: 'HeartCtrl'
        }
      }
    })
          //These are subtabs of tab-heart
            .state('tab.heart.following', {
                url: '/following',
                views: {
                  'heart-page': {
                    templateUrl: 'templates/heart-subtabs/heart-following.html',
                    controller: 'HeartFollowingCtrl'
                  }
                }
              })

              .state('tab.heart.you', {
                  url: '/you',
                  views: {
                    'heart-page': {
                      templateUrl: 'templates/heart-subtabs/heart-you.html',
                      controller: 'HeartYouCtrl'
                    }
                  }
                })

    .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'templates/tab-profile.html',
            controller: 'ProfileCtrl'
          }
        }
      })
      //These are subtabs of tab-heart
        .state('tab.profile.grid', {
            url: '/grid',
            views: {
              'grid-page': {
                templateUrl: 'templates/profile-grid.html'
              }
            }
          })

          .state('tab.profile.list', {
              url: '/list',
              views: {
                'list-page': {
                  templateUrl: 'templates/profile-list.html'
                }
              }
            })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});