export default class moviesController {
    constructor(moviesService, $rootScope) {
        this.movies = [];
        this.moviesService = moviesService;
        this.searchValue = "";
        this.message = "";
        this.resultsNumber = 10;
        this.$rootScope = $rootScope;
    }

    getMovieList() {
        this.resultsNumber = 10;
        this.movies = [];
        this.moviesService.searchMovies(this.searchValue).then(data => {
          console.log(data);
            if (Object.keys(data.data).length === 0) {
                this.message = 'No results for: ' + this.searchValue + '"';
            } else {

            this.message = 'Search results for: "' + this.searchValue + '"';
            angular.forEach(data.data, item => {
                angular.forEach(item, movie => {
                    this.movies.push(movie);
                });
            });
          }
        }, data => {
          this.message = "Unable to retrieve results - Connection problem";
        });

    }

    getMovieInfo(movieTitle) {
        this.moviesService.searchMovieInfo(movieTitle).success(data => {
            this.$rootScope.$broadcast('openMovieInfo', data);
        });
    }
}


moviesController.$inject = ['moviesService', '$rootScope'];
