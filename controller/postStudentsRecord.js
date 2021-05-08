const StudentModel = require('../schemas/Student');
const AddressModel = require('../schemas/Address');

/**
* This function is used to post student data in database along
* with address of students in the form of array.
 * @param {student, Array<address>} req Student object.
 * @param {res} respons object.
 * @param {next} next function handler.
 * @return {success, status}
 */
const postStudentsRecord = (req, res, next) => {
  const studentInformation = {
    rollNumber: req.body.rollNumber,
    studentFirstName: req.body.studentFirstName,
    studentLastName: req.body.studentLastName,
    class: req.body.class,
    parentContactNumber: req.body.parentContactNumber,
  }
  const student = new StudentModel(studentInformation);
  student.save().then((status) => {

    const studentAddresses = (req.body.address || []).map((addressObject) => {
      return {
        ...addressObject,
        studentId: status._id
      }
    });
    AddressModel.insertMany(studentAddresses).then(AddressStatus => {
      return res.json({ success: true, status: status })
    }).catch((err) => {
      throw new Error(err);
    })
  }).catch((err) => {
    return res.status(500).json({ success: false });
  });


}
module.exports = postStudentsRecord;


