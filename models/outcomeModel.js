const mongoose = require('mongoose');

const outcomeSchema = new mongoose.Schema({
  outcome: String,
});

const Outcome = mongoose.model('Outcome', outcomeSchema);

module.exports = Outcome;
