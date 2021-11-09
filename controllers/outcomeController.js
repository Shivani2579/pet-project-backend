const Outcome = require('./../models/outcomeModel');

exports.createOutcome = async (req, res) => {
  try {
    const newOutcome = await Outcome.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newOutcome,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllOutcomes = async (req, res) => {
  try {
    const outcomes = await Outcome.find();
    res.status(200).json({
      status: 'success',
      data: {
        outcomes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
