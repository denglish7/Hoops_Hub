var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer')

module.exports = (function(){
    return{
        add: function(req, res){
            var answer = new Answer(req.body)
            answer._user = req.session.user._id
            answer.likes = 0;
            answer.save(function(err, answer){
                Question.findOne({_id: req.body._question}, function(err, question){
                    question.Acount += 1;
                    question._answers.push(answer._id);
                    question.save(function(err, questionData){
                        res.json(answer);
                    })
                })
                User.findOne({_id: req.session.user._id}, function(err, user){
                    user._answers.push(answer._id);
                    user.save();
                })
            })
        },
        likeAnswer: function(req, res){
            Answer.findOne({_id: req.body._id}, function(err, answer){
                answer.likes += 1;
                User.findOne({_id: req.session.user._id}, function(err, user){
                    answer._userLikes.push(user._id);
                    answer.save(function(err, answerData){
                        if(err){
                            res.json(err)
                        } else {
                            res.json(answerData)
                        }
                    })
                })
            })
        },
        deleteAnswer: function(req, res){
            Answer.remove({_id: req.body._id}, function(err, data){
                res.json({status: true});
            })
        }
    }
})()
