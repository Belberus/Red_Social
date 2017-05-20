angular.module('APSocial').controller('HomeCtrl', [
                '$scope',
                'communities',
                'auth',
                function($scope, communities, auth){
                    $scope.allCommunities = communities.communities;
                    $scope.allMyCommunities = communities.mycommunities;
                    $scope.communities = communities.communities;
                    $scope.mycommunities = communities.mycommunities;
                    $scope.isLoggedIn = auth.isLoggedIn;

                    $scope.shownames = function() {
                        console.log(communities);    
                    };

                    $scope.subscribe = function(community){
                        console.log(community);
                        communities.suscribe(community);
                        console.log($scope.mycommunities)
                    };

                    $scope.unSubscribe = function(community){
                        communities.unSubscribe(community);
                        console.log($scope.mycommunities)

                    }

                    $scope.isSubscribed = function(community){
                        for (var i = 0; i < $scope.mycommunities.length; i++) {
                            if (community.name == $scope.mycommunities[i].name) {
                                return false;
                            }
                        }
                        return true;
                    }

                    $scope.searchInCommunities = function() {
                        $scope.communities = [];
                        for (var i = 0; i< $scope.allCommunities.length; i++) {
                            if ($scope.allCommunities[i].name.toUpperCase().includes($scope.stringSearch.toUpperCase())) {
                                $scope.communities.push($scope.allCommunities[i]);
                            }
                        }
                    }

                    $scope.searchInMyCommunities = function() {
                        $scope.mycommunities = [];
                        for (var i = 0; i< $scope.allMyCommunities.length; i++) {
                            if ($scope.allMyCommunities[i].name.toUpperCase().includes($scope.stringSearchMy.toUpperCase())) {
                                $scope.mycommunities.push($scope.allMyCommunities[i]);
                            }
                        }
                    }
                }]);





