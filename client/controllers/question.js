app.controller('questionController', function($scope, questionFactory, $routeParams){
    $scope.addQuestion = function(){
        $scope.Qerrors = [];
        if(!$scope.newQ || !$scope.newQ.text){
            $scope.Qerrors.push('Please type something in Question field');
        } else if($scope.newQ.text.length < 10){
            $scope.Qerrors.push('Question must be at least 10 characters long.');
        } else {
            questionFactory.addQuestion($scope.newQ);
        }
    }
    $scope.show = function(id){
        questionFactory.show(id);
    }
    if($routeParams.id){
        questionFactory.getQuestions(function(data){
            $scope.questions = data;
            for(question in $scope.questions){
                if($scope.questions[question]['_id'] == $routeParams.id){
                    $scope.cur_question = $scope.questions[question];
                }
            }
        })
    } else {
        questionFactory.getQuestions(function(data){
            $scope.questions = data;
        })
    }
})
