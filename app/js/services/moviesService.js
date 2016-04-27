export default class moviesService {
    constructor($http) {
        this.$http = $http;
    }
    searchMovies(searchValue) {
        //return this.$http.get('http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=' + searchValue);
        return this.$http.get('http://www.omdbapi.com/?s=' + searchValue + '&page=' + 1);
    }
    searchMovieInfo(movieId) {
      return this.$http.get('http://www.omdbapi.com/?tomatoes=true&i=' + movieId);
    }
}


moviesService.$inject = ['$http'];
