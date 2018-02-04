
(function () {

    var app = angular.module("githubViewer", []);

    var MainController = function ($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };


        var onError = function (reason) {
            $scope.error = "Could not getch the user";
        };


        $http.get("https://api.github.com/users/code36u4r60")
            .then(onUserComplete, onError);


        $scope.message = "Hello, Angular!";

    };

    app.controller("MainController", ["$scope", "$http", MainController]);

}());
