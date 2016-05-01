export default class movieListController {
    constructor($scope, $stateParams, $state, moviesService) {
        this.movies = [];
        this.moviesService = moviesService;
        this.currentPage = Number($stateParams.page);
        this.searchValue = $stateParams.searchValue;
        this.$state = $state;
        this.$scope = $scope;
        this.moviesService.searchMovies(this.searchValue, this.currentPage).then(data => {
            this.totalPages = Math.ceil(data.data.totalResults / 10);

            if (isNaN(this.totalPages)) {
                this.$scope.main.message = "Page Not Found";
            } else if (data.data.Response === "False") {
                this.$scope.main.message = 'No results for: ' + this.searchValue + '"';
            } else {
                this.$scope.main.message = data.data.totalResults + ' results for: "' + this.searchValue + '"';
                this.movies = data.data.Search;
            }
        }, data => {
            this.$scope.main.message = "Unable to retrieve results - Connection problem";
        });

    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage += 1;
            this.$state.transitionTo('searchResults', {
                searchValue: this.searchValue,
                page: this.currentPage
            });
        }
    }

    previousPage() {
        if (this.currentPage !== 1) {
            this.currentPage -= 1;
            this.$state.transitionTo('searchResults', {
                searchValue: this.searchValue,
                page: this.currentPage
            });
        }
    }
}


movieListController.$inject = ['$scope', '$stateParams', '$state', 'moviesService'];
