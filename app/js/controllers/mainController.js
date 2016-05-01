export default class mainController {
    constructor($rootScope, $state) {
      this.$rootScope = $rootScope;
      this.$state = $state;
      this.searchValue = "";
      this.message = "";
      this.$rootScope.$on('$viewContentLoading', (event, viewConfig) => {
            if (this.$state.current.name === "home") {
                this.message = "";
                this.searchValue = "";
            }
        });

    }

    doSearch() {
        this.$state.transitionTo('searchResults', {
            searchValue: this.searchValue,
            page: 1
        });
    }

}

mainController.$inject = ['$rootScope', '$state'];
