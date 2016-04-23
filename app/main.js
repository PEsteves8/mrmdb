//import the bootstrap.js file
//import bootstrap from 'bootstrap';
import angular from 'angular';
import ngSanitize from 'angular-sanitize';

// Controllers
import moviesController from 'app/js/controllers/moviesController.js';
import movieDataController from 'app/js/controllers/movieDataController.js';
import listController from 'app/js/controllers/listController.js';

// Services
import moviesService from 'app/js/services/moviesService.js';


var app = angular.module('app', ['ngSanitize'])
    .service('moviesService', moviesService)
    .controller('moviesController', moviesController)
    .controller('listController', listController)
    .controller('movieDataController', movieDataController);
