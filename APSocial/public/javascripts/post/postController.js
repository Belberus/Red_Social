angular.module('APSocial').controller('PostsCtrl', [
        '$scope',
        'posts',
        'post',
        'auth',
        function($scope, posts, post, auth){
            $scope.post = post;
            $scope.isLoggedIn = auth.isLoggedIn;
            $scope.isSameUser = auth.isSameUser;
            $scope.getDate = posts.getCommentDate;

            $scope.addComment = function(){
                if($scope.body === '') { return; }
                posts.addComment(post._id, {
                    body: $scope.body,
                    author: auth.currentUser,
                }).success(function(comment) {
                    $scope.post.comments.push(comment);
                });
                $scope.body = '';
            };

            $scope.upvote = function(comment){
                posts.upvoteComment(post, comment); 
            };

            $scope.deleteComment = function(post, comment){

                posts.deleteComment(post, comment);
            };
        }]);
