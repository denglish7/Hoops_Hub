app.factory('sessionFactory', function($http, $location, $route){
    var factory = {};
    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dash');
            }
        })
    }
    factory.checkStatus = function(cb){
        $http.get('/checkstatus').then(function(output){
            if(!output.data){
                $location.url('/');
            } else {
                cb(output.data)
            }
        })
    }
    factory.getUsers = function(cb){
        $http.get('/users/getUsers').then(function(output){
            cb(output.data);
        })
    }
    return factory;
})
