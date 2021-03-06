angular.module('APSocial').factory('myCommunities', ['$http','auth',function($http, auth){
    var c = {
        mycommunities: []
    };

    c.getUserCommunities = function() {
        return $http.get('/mycommunities', {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            angular.copy(data, c.mycommunities);
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
        return 0;
    }

    return c;

}]);
