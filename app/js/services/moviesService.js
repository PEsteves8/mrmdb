export default class moviesService {
    constructor($http) {
        this.$http = $http;
    }
    searchMovies(searchValue) {
        return this.$http.get('http://www.omdbapi.com/?s=' + searchValue);
    }
}


moviesService.$inject = ['$http'];
