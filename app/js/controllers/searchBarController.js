export default class searchBarController {
  constructor($rootScope, $state) {
    this.searchValue = "";
    this.$rootScope = $rootScope;
    this.$state = $state;
  }

  doSearch() {
    this.$state.transitionTo('searchResults', {searchValue: this.searchValue, page: 1});
  }

}

searchBarController.$inject = ['$rootScope', '$state'];
