//@TODO Add pagination
//@TODO Improve header styles
//@TODO Improve data showcase styles

import angular from 'angular';
import 'angular-ui-router';

// Controllers
import movieListController from 'app/js/controllers/movieListController.js';
import movieDataController from 'app/js/controllers/movieDataController.js';
import listController from 'app/js/controllers/listController.js';
import searchBarController from 'app/js/controllers/searchBarController.js';

// Services
import moviesService from 'app/js/services/moviesService.js';


var app = angular.module('app', ['ui.router'])
    .service('moviesService', moviesService)
    .controller('movieListController', movieListController)
    .controller('searchBarController', searchBarController)
    .controller('listController', listController)
    .controller('movieDataController', movieDataController);


app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('movieData', {
                url: '/title-id/:movieID',
                templateUrl: 'app/partials/movie-data.html',
                controller: 'movieDataController',
                controllerAs: 'movieData'
            })
            .state('searchResults', {
              url: '/search-results/:searchValue/:page',
              templateUrl: 'app/partials/movie-list.html',
              controller: 'movieListController',
              controllerAs: 'movies'
            });

    });
