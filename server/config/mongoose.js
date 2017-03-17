var mongoose = require('mongoose');
var path = require('path');
var models_path = path.join(__dirname + './../models');
var fs = require('fs');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mydb';

mongoose.connect(mongoUri);

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})
