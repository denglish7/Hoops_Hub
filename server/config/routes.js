var user = require('./../controllers/session.js');
var question = require('./../controllers/question.js');
var answer = require('./../controllers/answer.js');

module.exports = function(app){
    app.post('/login', function(req, res){
        user.login(req, res);
    })
    app.get('/checkstatus', function(req, res){
        user.checkStatus(req, res)
    })
    app.get('/logout', function(req, res){
        user.logout(req, res);
    })
    app.get('/users/getUsers', function(req, res){
        user.getAll(req, res);
    })
    app.post('/question/add', function(req, res){
        question.addQuestion(req, res);
    })
    app.get('/question/getall', function(req, res){
        question.getall(req, res);
    })
    app.post('/answer/add', function(req, res){
        answer.add(req, res);
    })
    app.post('/answer/like', function(req, res){
        answer.likeAnswer(req, res);
    })
}
