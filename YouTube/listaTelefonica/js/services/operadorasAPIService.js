
angular.module("listaTelefonica").service("operadorasAPI", function ($http, config) {
    this.getOperadoras = function () {
        var result = $http.get(config.baseUrl + "/operadoras");
        console.log(result)
        return result;
    };
});