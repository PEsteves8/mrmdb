export default class searchBarController {
  constructor($rootScope, $state) {
    this.searchValue = "";
    this.$rootScope = $rootScope;
    this.$state = $state;
  }

  doSearch() {
    this.$state.transitionTo('searchResults', {movieName: this.searchValue});
  }

}

searchBarController.$inject = ['$rootScope', '$state'];
