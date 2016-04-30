//@TODO Check out angular animate
//@TODO Check out angular spinwheel

//import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/styles.scss';

import angular from 'angular';
import 'angular-ui-router';

// Controllers
import movieListController from './js/controllers/movieListController.js';
import movieDataController from './js/controllers/movieDataController.js';
import listController from './js/controllers/listController.js';
import searchBarController from './js/controllers/searchBarController.js';

// Services
import moviesService from './js/services/moviesService.js';

// Config
import config from './config.js';

var app = angular.module('app', ['ui.router'])
    .service('moviesService', moviesService)
    .controller('movieListController', movieListController)
    .controller('searchBarController', searchBarController)
    .controller('listController', listController)
    .controller('movieDataController', movieDataController)
    .config(config);
