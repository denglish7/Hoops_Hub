var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    text: {type: String, required: true},
    description: {type: String, required: false},
    Acount: {type: Number},
    _answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

mongoose.model('Question', QuestionSchema)
