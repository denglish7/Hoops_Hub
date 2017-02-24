app.controller('answerController', function($scope, answerFactory, questionFactory, $routeParams){
    $scope.addAnswer = function(id){
        $scope.Aerrors = [];
        if(!$scope.newA || !$scope.newA.text){
            $scope.Aerrors.push('Please type something in Answer field');
        } else if($scope.newA.text.length < 5){
            $scope.Aerrors.push('Answer must be at least 5 characters long.');
        } else {
            $scope.newA._question = id;
            answerFactory.addAnswer($scope.newA);
        }
    }
    $scope.likeAnswer = function(answer){
        answerFactory.likeAnswer(answer);
    }
})
