export default function config($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
              url: '/',
                  
            })
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


cfpLoadingBarProvider.parentSelector = '.load-icon';


}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider'];
