angular.module("listaTelefonica").factory("contatosAPI", function(){
    var _getContatos = function(){
        return $http.get("http://localhost:3412/contatos")
    };

    return {
        getContatos: _getContatos
    };
});