var app = angular.module('APSocial', ['ui.router']);

app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('community', {
                    url: '/community',
                    templateUrl: '/templates/community.html',
                    controller: 'MainCtrl',
                    resolve: {
                        postPromise: ['posts', function(posts){
                            return posts.getAll();
                        }]

                    }
                })

            .state('login', {
                url: '/login',
                templateUrl: '/templates/login.html',
                controller: 'AuthCtrl',
                onEnter: ['$state', 'auth', function($state, auth){
                    if(auth.isLoggedIn()){
                        $state.go('community');
                    }
                }]
            })

            .state('register', {
                url: '/register',
                templateUrl: '/templates/register.html',
                controller: 'AuthCtrl',
                onEnter: ['$state', 'auth', function($state, auth){
                    if(auth.isLoggedIn()){
                        $state.go('community');
                    }
                }]
            })

            .state('posts', {
                url: '/posts/{id}',
                templateUrl: '/templates/posts.html',
                controller: 'PostsCtrl',
                resolve: {
                    post: ['$stateParams', 'posts', function($stateParams, posts) {
                        return posts.get($stateParams.id);
                    }]
                }
            });

            $urlRouterProvider.otherwise('community');
        }]);

app.factory('posts',['$http','auth', function($http,auth){
    var o =  {
        posts: []
    };

    o.getAll = function() {
        return $http.get('/posts').success(function(data){
            angular.copy(data, o.posts);
        });
    };

    o.create = function(post) {
        return $http.post('/posts', post, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            o.posts.push(data);
        });
    };

    o.addview = function(post) {
        return $http.put('/posts/' + post._id +'/addview').success(function(data){
            post.views += 1;
        });
    };

    o.get = function(id) {
        return $http.get('/posts/' + id).then(function(res){
            return res.data;
        });
    };

    o.deletePost = function(post) {
        return $http.delete('/posts/' + post._id, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function() {
            o.posts.splice(o.posts.indexOf(post),1);
        });
    }; 

    o.addComment = function(id, comment) {
        return $http.post('/posts/'+ id + '/comments', comment, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        });
    };

    o.upvoteComment = function(post, comment) {
        return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote', null, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        }).success(function(data){
            comment.upvotes += 1;
        });
    };

    o.deleteComment = function(post, comment) {
        return $http.delete('/posts/' + post._id + '/comments/' + comment._id, {
            headers: {Authorization: 'Bearer '+auth.getToken()}
        });
    };

    o.getCommentDate = function(id) {
        var q = id.toString().substring(0,8);
        var t = new Date( parseInt(q, 16) * 1000);
        return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate() + " "+ t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();

    };

    return o;
}]);

app.factory('auth',['$http','$window', function($http, $window){
    var auth = {};

    auth.saveToken = function(token){
        $window.localStorage['AP-token'] = token;
    };

    auth.getToken = function(){
        return $window.localStorage['AP-token'];
    };

    auth.isLoggedIn = function(){
        var token = auth.getToken();

        if(token){
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.exp > Date.now() / 1000;
        }else {
            return false;
        }
    };

    auth.currentUser = function(){
        if(auth.isLoggedIn()){
            var token = auth.getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.username;
        }
    };

    auth.register = function(user){
        return $http.post('/register', user).success(function(data){
            auth.saveToken(data.token);
        });
    };

    auth.logIn = function(user){
        return $http.post('/login', user).success(function(data){
            auth.saveToken(data.token);
        });
    };

    auth.logOut = function(){
        $window.localStorage.removeItem('AP-token');
    };

    auth.isSameUser = function(post) {
        if(auth.isLoggedIn()){
                return auth.currentUser() === post.author;
            }
            else{return false;}
        };

    return auth;
}]);

app.controller('PostsCtrl', [
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



app.controller('MainCtrl', [
        '$scope',
        'posts',
        'auth',
        function($scope, posts, auth){
            $scope.posts = posts.posts;
            $scope.isLoggedIn = auth.isLoggedIn;
            $scope.isSameUser = auth.isSameUser;

            $scope.addPost = function() {
                if(!$scope.title || $scope.title === '') {return;}
                posts.create({
                    title: $scope.title,
                    link: $scope.link,
                    author: auth.currentUser,
                });
                $scope.title = '';
                $scope.link = '';
            };

            $scope.incrementViews = function(post) {
                posts.addview(post);
            };

            $scope.deletePost = function(post) {
                posts.deletePost(post);
            }; 
        }]);

app.controller('AuthCtrl', [
        '$scope',
        '$state',
        'auth',
        function($scope, $state, auth){
            $scope.user = {};

            $scope.register = function(){
                auth.register($scope.user).error(function(error){
                    $scope.error = error;
                }).then(function(){
                    $state.go('community');
                });
            };

            $scope.logIn = function(){
                auth.logIn($scope.user).error(function(error){
                    $scope.error = error;
                }).then(function(){
                    $state.go('community');
                });
            };
        }]);

app.controller('NavCtrl', [
        '$scope',
        'auth',
        function($scope,auth){
            $scope.isLoggedIn = auth.isLoggedIn;
            $scope.currentUser = auth.currentUser;
            $scope.logOut = auth.logOut;
        }]);
