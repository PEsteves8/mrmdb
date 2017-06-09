export default class moviesService {
    constructor($http) {
        this.$http = $http;
    }
    searchMovies(searchValue, page) {
        return this.$http.get('http://www.omdbapi.com/?s=' + searchValue + '&page=' + page + "&apikey=1fd9be66");
    }
    searchMovieInfo(movieId) {
      return this.$http.get('http://www.omdbapi.com/?tomatoes=true&i=' + movieId + "&apikey=1fd9be66");
    }
}


moviesService.$inject = ['$http'];
