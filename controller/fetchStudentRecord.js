const StudentModel = require('../schemas/Student');
const mongoose = require('mongoose');

/**
 * Used to fetch student record based on provided id;
 * 
 * @param {id} req id student id to be fetched. 
 * @param {res} res, response callback function.
 * @param {next} next, next req. handler.
 * @returns {success, records} return record of student with address.
 */
const fetchStudentRecord = (req, res, next) => {
  const { id } = req.params;

  StudentModel.aggregate([
  {
    $match: { _id: new mongoose.Types.ObjectId(id) }
  },
  {
    $lookup: {
      from: 'addresses',
      localField: "_id",
      foreignField: "studentId",
      as: "address",
    }
  }
  ]).exec(function (err, records) {
    if (err) {
      console.error(err)
      return res.status(500).json({ success: false, records: [] });
    }
    return res.json({ success: true, records : records});
  });
}
module.exports = fetchStudentRecord;