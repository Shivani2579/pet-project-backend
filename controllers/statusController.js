const Status = require('./../models/statusModel');

exports.createStatus = async (req, res) => {
  try {
    const newStatus = await Status.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newStatus,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.find();
    res.status(200).json({
      status: 'success',
      data: {
        statuses,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
