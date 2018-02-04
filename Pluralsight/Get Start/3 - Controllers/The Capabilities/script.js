
var MainController = function ($scope) {

    var person = {
        firstName: "Scott",
        lastName: "Allen",
        imageSrc:"http://odetocode.com/images/scott_allen_2.jpg"
    };

    $scope.message = "Hello, Angular!";
    $scope.person = person;
};