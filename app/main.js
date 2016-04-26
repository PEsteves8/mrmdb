//import the bootstrap.js file
//import bootstrap from 'bootstrap';
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import 'angular-ui-router';

// Controllers
import movieListController from 'app/js/controllers/movieListController.js';
import movieDataController from 'app/js/controllers/movieDataController.js';
import listController from 'app/js/controllers/listController.js';
import searchBarController from 'app/js/controllers/searchBarController.js';

// Services
import moviesService from 'app/js/services/moviesService.js';


var app = angular.module('app', ['ngSanitize', 'ui.router'])
    .service('moviesService', moviesService)
    .controller('movieListController', movieListController)
    .controller('searchBarController', searchBarController)
    .controller('listController', listController)
    .controller('movieDataController', movieDataController);


app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('movieData', {
                url: '/title/:movieID',
                templateUrl: 'app/partials/movie-data.html',
                controller: 'movieDataController',
                controllerAs: 'movieData'
            })
            .state('searchResults', {
              url: '/search-results/:movieName',
              templateUrl: 'app/partials/movie-list.html',
              controller: 'movieListController',
              controllerAs: 'movies'
            });

    });
