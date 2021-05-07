const dbConnection = require('../db_connection');
const StudentModel = require('../schemas/Student');
const mongoose = require('mongoose');

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
      return res.json({ success: false, records: [] });
    }
    return res.json({ success: true, records : records});
  });
}
module.exports = fetchStudentRecord;