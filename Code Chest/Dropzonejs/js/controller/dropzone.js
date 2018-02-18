

function fileCtrl ($scope) {
    $scope.partialDownloadLink = ' ';
    $scope.filename = '';

    $scope.uploadFile = function() {
        $scope.processDropzone();
    };

    $scope.reset = function() {
        $scope.resetDropzone();
    };
}

angular.module('dropzoneApp').controller('fileCtrl', fileCtrl);