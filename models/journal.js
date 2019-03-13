const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true },
  entries: []
});

module.exports = mongoose.model('Journal', journalSchema);
