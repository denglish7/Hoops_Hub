var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/logreg.html'
    })
    .when('/dash', {
        templateUrl: 'partials/dash.html'
    })
    .when('/new_question', {
        templateUrl: 'partials/new_question.html'
    })
    .when('/question/new_answer/:id', {
        templateUrl: 'partials/new_answer.html'
    })
    .when('/question/:id', {
        templateUrl: 'partials/show_answers.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})
