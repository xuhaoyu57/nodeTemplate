var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/school');
var testSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('test', testSchema);