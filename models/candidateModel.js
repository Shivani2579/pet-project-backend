const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
    },
    status: {
      type: mongoose.Schema.ObjectId,
      ref: 'Status',
    },
    outcome: {
      type: mongoose.Schema.ObjectId,
      ref: 'Outcome',
    },
    role: {
      type: mongoose.Schema.ObjectId,
      ref: 'Role',
    },
    active: {
      type: Number,
      default: 1,
    },
    screener: {
      type: Number,
    },
    cvScreeningDate: Date,
    taSendDate: Date,
    taReceivedDate: Date,
    solutionEvaDate: Date,
    receivedEvaDate: Date,
    type: Number,
    filePath: String,
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
