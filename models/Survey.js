const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  dateSent: Date,
  lastResponded: Date
});

const Survey = mongoose.model('surveys', surveySchema);

module.exports = Survey;
