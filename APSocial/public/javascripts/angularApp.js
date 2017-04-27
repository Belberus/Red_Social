angular.module('APSocial',['ui.router']).config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: '/templates/home.html',
                controller: 'HomeCtrl',
                resolve: {
                   coms: ['communities', function(communities){
                        return communities.getAll();
                    }]
                }
            })

            .state('community', {
                url: '/community/{community}',
                templateUrl: '/templates/community.html',
                controller: 'MainCtrl',
                resolve: {
                    postPromise: ['$stateParams','posts', function($stateParams, posts){
                        return posts.getAll($stateParams.community);
                    }]

                }
            })

            .state('login', {
                url: '/login',
                templateUrl: '/templates/login.html',
                controller: 'AuthCtrl',
                onEnter: ['$state', 'auth', function($state, auth){
                    if(auth.isLoggedIn()){
                        $state.go('home');
                    }
                }]
            })

            .state('register', {
                url: '/register',
                templateUrl: '/templates/register.html',
                controller: 'AuthCtrl',
                onEnter: ['$state', 'auth', function($state, auth){
                    if(auth.isLoggedIn()){
                        $state.go('home');
                    }
                }]
            })

            .state('posts', {
                url: '/community/{community}/posts/{id}',
                templateUrl: '/templates/posts.html',
                controller: 'PostsCtrl',
                resolve: {
                    post: ['$stateParams', 'posts', function($stateParams, posts) {
                        return posts.get($stateParams.id);
                    }]
                }
            });

            $urlRouterProvider.otherwise('home');
        }]);

