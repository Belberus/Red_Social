angular.module('APSocial').controller('HomeCtrl', [
                '$scope',
                'communities',
                'auth',
                function($scope, communities, auth){
                    $scope.communities = communities.communities;
                    
                    $scope.shownames = function() {
                        console.log(communities);    
                    };

                    $scope.subscribe = function(community){
                        communities.suscribe(community);
                    };

                }]);





