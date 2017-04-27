angular.module('APSocial').controller('MainCtrl', [
        '$scope',
        'posts',
        'auth',
        function($scope, posts, auth){
            $scope.posts = posts.posts;
            $scope.name = posts.name;
            $scope.isLoggedIn = auth.isLoggedIn;
            $scope.isSameUser = auth.isSameUser;

            $scope.addPost = function() {
                if(!$scope.title || $scope.title === '') {return;}
                posts.create({
                    title: $scope.title,
                    link: $scope.link,
                    content: $scope.content,
                    author: auth.currentUser,
                });
                $scope.title = '';
                $scope.link = '';
                $scope.content= '';
            };

            $scope.incrementViews = function(post) {
                posts.addview(post);
            };

            $scope.deletePost = function(post) {
                posts.deletePost(post);
            }; 
        }]);

