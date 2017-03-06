var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = (function(){
    return{
        addQuestion: function(req, res){
            var question = new Question(req.body);
            question.save(function(err, data){
                if(err){
                    res.json(err);
                } else {
                    res.json(data);
                }
            })
        },
        getall: function(req, res){
            Question.find({})
            .populate('_answers')
            .populate({
                path: '_answers',
                model: 'Answer',
                populate: {
                    path: '_user',
                    model: 'User'
                }
            })
            .exec(function(err, question){
                res.json(question);
            })
        }
    }
})()
