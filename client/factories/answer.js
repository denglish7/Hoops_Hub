app.factory('answerFactory', function($http, $route, $location){
    var factory = {};
    factory.addAnswer = function(answer){
        $http.post('/answer/add', answer).then(function(output){
            $location.url('/dash');
        })
    }
    factory.likeAnswer = function(answer){
        $http.post('/answer/like', answer).then(function(output){
            $route.reload();
        })
    }
    return factory;
})
