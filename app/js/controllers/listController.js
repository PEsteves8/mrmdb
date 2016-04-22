export default class listController {
    constructor() {
      this.resultsLimit = 3;
    }

    setResultsLimit(n) {
      return this.resultsLimit = n;
    }

    showMoreResultsButton(listLength) {
      return listLength > 0 && listLength >= this.resultsLimit
    }

    displayMoreResults(n) {
      this.resultsLimit = this.resultsLimit + 10;
    }
}
