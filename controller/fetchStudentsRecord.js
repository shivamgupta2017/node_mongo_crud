const dbConnection = require('../db_connection');
const StudentModel = require('../schemas/Student');

const fetchStudentsRecords = (req, res, next) => {

	StudentModel.aggregate([{
		$lookup: {
			from: 'addresses',
			localField: "_id",
			foreignField: "studentId",
			as: "address"
		}
	}]).exec(function (err, records) {
		if (err) {
			return res.json({ success: false, records: [] });
		}
		return res.json({ success: true, records });
	});
}
module.exports = fetchStudentsRecords;