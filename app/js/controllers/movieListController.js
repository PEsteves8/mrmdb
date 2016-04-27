export default class movieListController {
    constructor(moviesService, $rootScope, $scope, $stateParams) {
        this.movies = [];
        this.moviesService = moviesService;
        this.message = "";
        this.resultsNumber = 10;
        this.movieName = "";
        this.$rootScope = $rootScope;
        this.$stateParams = $stateParams;

        this.moviesService.searchMovies(this.$stateParams.searchValue).then(data => {
            let searchValue = this.$stateParams.searchValue;

            console.log(data);
            if (data.Response === "False") {
                this.message = 'No results for: ' + searchValue + '"';
            } else {
                this.message = data.data.totalResults + ' results for: "' + searchValue + '"';
                this.movies = data.data.Search;
                console.log(this.movies);
            }
        }, data => {
            this.message = "Unable to retrieve results - Connection problem";
        });

    }
}


movieListController.$inject = ['moviesService', '$rootScope', '$scope', '$stateParams'];
