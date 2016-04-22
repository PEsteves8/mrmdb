//import the bootstrap.js file
//import bootstrap from 'bootstrap';
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import moviesController from 'app/js/controllers/moviesController.js';
import moviesService from 'app/js/services/moviesService.js';


var app = angular.module('app', ['ngSanitize'])
    .service('moviesService', moviesService)
    .controller('moviesController', moviesController);
