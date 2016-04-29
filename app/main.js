//@TODO Check out angular animate
//@TODO Check out angular spinwheel
//@TODO Improve header
//@TODO Deal with logo legal

import angular from 'angular';
import 'angular-ui-router';

// Controllers
import movieListController from 'app/js/controllers/movieListController.js';
import movieDataController from 'app/js/controllers/movieDataController.js';
import listController from 'app/js/controllers/listController.js';
import searchBarController from 'app/js/controllers/searchBarController.js';

// Services
import moviesService from 'app/js/services/moviesService.js';

// Config
import angularConfig from 'app/angularConfig.js';



var app = angular.module('app', ['ui.router'])
    .service('moviesService', moviesService)
    .controller('movieListController', movieListController)
    .controller('searchBarController', searchBarController)
    .controller('listController', listController)
    .controller('movieDataController', movieDataController)
    .config(angularConfig);;
