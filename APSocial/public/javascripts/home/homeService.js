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
                angular.copy(data2, c.mycommunities);
            });
        });
    };

    c.suscribe = function(community) {
        return $http.put('/community/'+ community._id +'/sub', null, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            community.subs=data.subs;
            c.mycommunities.push(community);
        });
    };

    c.unSubscribe = function(community) {
        console.log(community);
        return $http.delete('/community/'+ community._id +'/sub', {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            for (var i = 0; i <c.mycommunities.length; i++) {
                if (c.mycommunities[i].name == community.name) {
                    c.mycommunities.splice(i, 1);
                    break;
                }
            }
            community.subs=data.subs;
        });
    };

    c.getUserCommunities = function() {
        return $http.get('/mycommunities',{
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data2){
            angular.copy(data2, c.mycommunities);
        });
    };

    return c;

}]);
