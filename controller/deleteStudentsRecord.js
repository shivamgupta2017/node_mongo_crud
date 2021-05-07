const StudentModel = require('../schemas/Student');
const AddressModel = require('../schemas/Address');
const mongoose = require('mongoose');

const deleteStudentRecord = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(401).json({ success: false })
  }
  AddressModel.deleteMany({ studentId: id }).then((status) => {
    StudentModel.deleteOne({ _id: id }).then((status) => {
      return res.json({ success: true });
    }).catch(err => {
      throw new Error(err)
    })
  }).catch(err => {
    return res.json({ success: false });
  });
}

module.exports = deleteStudentRecord;