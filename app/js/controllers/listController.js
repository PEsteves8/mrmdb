export default class listController {
    constructor() {
      this.resultsLimit = 0;
    }

    setResultsLimit(n) {
      this.resultsLimit = n;
      return this.resultsLimit;
    }

    showMoreResultsButton(listLength) {
      return listLength > 0 && listLength >= this.resultsLimit;
    }

    displayMoreResults(n) {
      this.resultsLimit = this.resultsLimit + 10;
    }
}
