var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    text: {type: String, required: true},
    description: {type: String, required: false},
    likes: {type: Number},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'},
    _userLikes: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

mongoose.model('Answer', AnswerSchema)
