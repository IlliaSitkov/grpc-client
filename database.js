const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://lab2user:@cluster0.ctfiz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const logMessageSchema = new Schema({
    message: String,
    level: String,
}, {timestamps: true});

const LogMessage = mongoose.model('LogMessage', logMessageSchema);

module.exports = LogMessage;