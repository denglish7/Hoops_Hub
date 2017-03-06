app.controller('answerController', function($scope, answerFactory, questionFactory, sessionFactory, $routeParams){
    $scope.addAnswer = function(id){
        $scope.Aerrors = [];
        if(!$scope.newA || !$scope.newA.text){
            $scope.Aerrors.push('Please type something in Opinion field');
        } else if($scope.newA.text.length < 5){
            $scope.Aerrors.push('Opinion must be at least 5 characters long.');
        } else {
            $scope.newA._question = id;
            answerFactory.addAnswer($scope.newA);
        }
    }
    $scope.likeAnswer = function(answer){
        answerFactory.likeAnswer(answer);
    }
    sessionFactory.checkStatus(function(data){
        $scope.curUser = data;
    })
    $scope.deleteAnswer = function(answer){
        answerFactory.deleteAnswer(answer);
    }
})
