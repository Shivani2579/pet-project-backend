const Role = require('./../models/roleModel');
const Outcome = require('./../models/outcomeModel');
const Status = require('./../models/statusModel');

exports.getPagedata = async (req, res) => {
  try {
    const roles = await Role.find();
    const outcomes = await Outcome.find();
    const statuses = await Status.find();
    res.status(200).json({
      status: 'success',
      data: {
        roles,
        outcomes,
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
