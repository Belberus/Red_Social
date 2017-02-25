var app = angular.module('APSocial', ['ui.router']);

app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('community', {
                    id: 'community',
                    url: '/community/',
                    templateUrl: 'community.html',
                    controller: 'MainCtrl'
                })

                .state('posts', {
                    id: 'posts',
                    url: '/posts/{id}',
                    templateUrl: 'posts.html',
                    controller: 'PostsCtrl'
                });


            $urlRouterProvider.otherwise('community');
        }]);

app.factory('posts',[function(){
    var o =  {
        posts: []
    };
    return o;

}]);

app.controller('PostsCtrl', [
        '$scope',
        '$stateParams',
        'posts',
        function($scope, $stateParams, posts){
            $scope.post = posts.posts[$stateParams.id];

            $scope.addComment = function(){
                if($scope.body === '') {return; }
                $scope.post.comments.push({
                    body: $scope.body,
                    author: 'user',
                    date: 0,
                    views: 0
                });
                $scope.body = '';
            };
        }]);



app.controller('MainCtrl', [
        '$scope',
        'posts',
        function($scope, posts){
            $scope.posts = posts.posts;

            $scope.addPost = function() {
                if(!$scope.title || $scope.title === '') {return;}
                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    views: 0,
                    comments: [
                        {author: 'Pablo', body: 'Post de prueba 1', date: '1', views: '0'},
                        {author: 'Alberto', body: 'Post de prueba 2', date: '2', views: '0'}
                    ]
                });
                $scope.title = '';
                $scope.link = '';
            };

            $scope.incrementViews = function(post) {
                post.views +=1;
            };
        }]);
