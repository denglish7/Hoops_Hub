app.factory('questionFactory', function($http, $route, $location){
    var factory = {};
    factory.addQuestion = function(question){
        $http.post('/question/add', question).then(function(output){
            $location.url('/dash')
        })
    }
    factory.getQuestions = function(cb){
        $http.get('/question/getall').then(function(output){
            cb(output.data);
        })
    }
    return factory;
})
