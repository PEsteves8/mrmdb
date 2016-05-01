// import 'normalize.css/normalize.css';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'angular-loading-bar/build/loading-bar.css';
import './css/styles.scss';

// import angualr and ui-router
import angular from 'angular';
import 'angular-ui-router';
import ngAnimate from 'angular-animate';

// import the loading bar
import 'angular-loading-bar';

// Controllers
import movieListController from './js/controllers/movieListController.js';
import movieDataController from './js/controllers/movieDataController.js';

import mainController from './js/controllers/mainController.js';

// Services
import moviesService from './js/services/moviesService.js';

// Config
import config from './config.js';



var app = angular.module('app', ['ui.router', 'angular-loading-bar', 'ngAnimate'])
    .service('moviesService', moviesService)
    .controller('movieListController', movieListController)
    .controller('mainController', mainController)
    .controller('movieDataController', movieDataController)
    .config(config);
