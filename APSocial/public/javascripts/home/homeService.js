angular.module('APSocial').factory('communities', ['$http','auth',function($http, auth){
    var c = {
        communities: [],
        mycommunities: []
    };

    c.getAll = function() {
        return $http.get('/home').success(function(data){
            angular.copy(data, c.communities);
            return $http.get('/mycommunities',{
                headers: {Authorization: 'Bearer '+auth.getToken()}
            }).success(function(data2){
                console.log(data2)
                angular.copy(data2, c.mycommunities);
            });
        });
    };

    c.suscribe = function(community) {
        return $http.put('community/'+ community._id +'/sub', null, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            community.subs=data.subs;
        });
    };

    return c;

}]);
