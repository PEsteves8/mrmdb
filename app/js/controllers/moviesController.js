// @TODO switch to imdb API using each version of search
// @TODO use modals to display movie info

export default class moviesController {
    constructor(moviesService) {
        this.movies = [];
        this.moviesService = moviesService;
        this.searchValue = "";
        this.message = "";
    }

    getMovieList() {
        this.moviesService.searchMovies(this.searchValue).then(data => {
            if (data.data.Response === 'True') {
              this.message = 'Search results for: "' + this.searchValue + '"';
                this.movies = data.data;
            } else {
                this.movies = [];
                this.message = data.data.Error;
            }
        }, () => {
          this.movies = [];
          this.message = "Error. Connection failed.";

        });

    }

    getMovieInfo(movieId) {
        this.moviesService.searchMovieInfo(movieId).success(data => {
            console.log(data);
        });
    }
}


moviesController.$inject = ['moviesService'];
