angular.module('APSocial').factory('posts',['$http','auth', function($http,auth){
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
                }).success(function() {
                    post.comments.splice(post.comments.indexOf(comment),1);
                });
            };

            o.getCommentDate = function(id) {
                var q = id.toString().substring(0,8);
                var t = new Date( parseInt(q, 16) * 1000);
                return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate() + " "+ t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();

            };

            return o;
        }]);
