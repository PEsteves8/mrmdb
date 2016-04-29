export default function angularConfig($stateProvider, $urlRouterProvider) {

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

}

angularConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
