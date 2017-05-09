angular.module('APSocial').controller('HomeCtrl', [
                '$scope',
                'communities',
                'auth',
                function($scope, communities, auth){
                    $scope.communities = communities.communities;
                    $scope.mycommunities = communities.mycommunities;

                    $scope.shownames = function() {
                        console.log(communities);    
                    };

                    $scope.subscribe = function(community){
                        communities.suscribe(community);
                    };

                    $scope.unSubscribe = function(community){
                        communities.unSubscribe(community);
                    }

                    $scope.isSubscribed = function(community){

                        for (var i = 0; i < $scope.mycommunities.length; i++) {
                            if (community.name == $scope.mycommunities[i].name) {
                                return false;
                            }
                        }
                        return true;
                    }
                }]);





