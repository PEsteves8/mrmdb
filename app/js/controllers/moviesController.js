// @TODO add show all results button
// @TODO use modals to display movie info

export default class moviesController {
    constructor(moviesService) {
        this.movies = [];
        this.moviesService = moviesService;
        this.searchValue = "";
        this.message = "";
    }

    getMovieList() {
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

    getMovieInfo(movieId) {
        this.moviesService.searchMovieInfo(movieId).success(data => {
            console.log(data);
        });
    }
}


moviesController.$inject = ['moviesService'];
