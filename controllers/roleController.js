const Role = require('./../models/roleModel');

exports.createRole = async (req, res) => {
  try {
    const newRole = await Role.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        newRole,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json({
      status: 'success',
      data: {
        roles,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
