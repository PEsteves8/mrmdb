export default class movieDataController {
    constructor($scope, $stateParams, moviesService) {
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.moviesService = moviesService;
        
        this.$scope.main.message = "";
        this.data = {};
        this.moviesService.searchMovieInfo(this.$stateParams.movieID).then(data => {
          if (data.data.Response === "False") {
              this.$scope.main.message = "Page Not Found";
            } else {this.data = data.data;}

        }, data => {
            this.$scope.main.message = "Unable to retrieve results - Connection problem";
        });
    }
}

movieDataController.$inject = ['$scope', '$stateParams', 'moviesService'];
