export default class movieDataController {
    constructor($scope) {
        this.data = {};
        $scope.$on('openMovieInfo', (event, value) => {
            this.data = value;
            console.log(value);
        });
    }
}
