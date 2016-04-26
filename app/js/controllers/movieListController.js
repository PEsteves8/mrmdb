export default class movieListController {
    constructor(moviesService, $rootScope, $scope, $stateParams) {
        this.movies = [];
        this.moviesService = moviesService;
        this.message = "";
        this.resultsNumber = 10;
        this.movieName = "";
        this.$rootScope = $rootScope;
        this.$stateParams = $stateParams;

        this.moviesService.searchMovies(this.$stateParams.movieName).then(data => {
            var movieName = this.$stateParams.movieName;

            console.log(data);
                if (Object.keys(data.data).length === 0) {
                    this.message = 'No results for: ' + movieName + '"';
                } else {
                this.message = 'Search results for: "' + movieName + '"';
                angular.forEach(data.data, item => {
                    angular.forEach(item, movie => {
                        this.movies.push(movie);
                    });
                });
            }}, data => {
              this.message = "Unable to retrieve results - Connection problem";
            }
          );

    }
}


movieListController.$inject = ['moviesService', '$rootScope', '$scope', '$stateParams'];
