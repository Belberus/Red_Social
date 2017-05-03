angular.module('APSocial').factory('communities', ['$http','auth',function($http, auth){
    var c = {
        communities: []
    };

    c.getAll = function() {
        return $http.get('/home').success(function(data){
            angular.copy(data, c.communities);
        });
    };

    c.suscribe = function(community) {
        return $http.put('community/'+ community._id +'/sub', null, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            console.log(data);
            //c.communities.push(data);
        });
    };

    c.unsuscribe = function(community) {
        return $http.delete
    }

    return c;

}]);
