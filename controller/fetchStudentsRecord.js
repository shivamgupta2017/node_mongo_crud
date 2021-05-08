const StudentModel = require('../schemas/Student');

/**
 * This api used to fetch record of student internally joins with addresses of students.
 * @param {req} req 
 * @param {res} res response function which uses to return api response.
 * @param {next} next function handler. 
 * @returns {status, records} returns records of student along with addresses.
 */
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
		return res.json({ success: true, records: records });
	});
}
module.exports = fetchStudentsRecords;