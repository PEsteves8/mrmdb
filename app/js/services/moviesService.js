export default class moviesService {
    constructor($http) {
        this.$http = $http;
    }
    searchMovies(searchValue) {
        return this.$http.get('http://www.omdbapi.com/?s=' + searchValue);
    }
    searchMovieInfo(movieId) {
      return this.$http.get('http://www.omdbapi.com/?tomatoes=true&i=' + movieId);

    }
}


moviesService.$inject = ['$http'];
