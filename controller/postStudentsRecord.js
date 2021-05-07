const StudentModel = require('../schemas/Student');
const AddressModel = require('../schemas/Address');

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
    // const addresses = new AddressModel(studentAddresses);
    AddressModel.insertMany(studentAddresses).then(status => {
      return res.json({success:true, status})
    }).catch((err) => {
      throw new Error(err);
    })
  }).catch((err) => {
    console.error('error ',err);
    return res.status(500).json({success:false});
  });


}
module.exports = postStudentsRecord;


