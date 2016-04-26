export default class movieDataController {
    constructor($scope, $stateParams, moviesService) {
        this.data = {};
        this.$stateParams = $stateParams;
        this.moviesService = moviesService;
        this.moviesService.searchMovieInfo(this.$stateParams.movieID).success(data => {
            this.data = data;
        });
    }
}

movieDataController.$inject = ['$scope', '$stateParams', 'moviesService'];
