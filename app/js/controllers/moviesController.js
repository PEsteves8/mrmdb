export default class moviesController {
    constructor(moviesService) {
        this.movies = [];
        this.moviesService = moviesService;
        this.searchValue = ""
    }

    getMovies() {
      console.log("poo");
      this.moviesService.searchMovies(this.searchValue).success(data => {
          this.movies = data.Search;
      });
    }
}


moviesController.$inject = ['moviesService'];
