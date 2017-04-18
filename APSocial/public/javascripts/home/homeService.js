angular.module('APSocial').factory('communities', ['$http',function($http){
    var c = {
        communities: []
    };

    c.getAll = function() {
        return $http.get('/home').success(function(data){
            angular.copy(data, c.communities);
        });
    };

}]);
