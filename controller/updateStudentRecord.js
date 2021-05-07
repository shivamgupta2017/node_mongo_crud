const StudentModel = require('../schemas/Student');
const AddressModel = require('../schemas/Address');

const updateMultipleAddress = async (addressToUpdate = []) => {

  return new Promise(async (resolve, reject) => {
    try {
      for (let indx = 0; indx < addressToUpdate.length; indx++) {
        const _id = addressToUpdate[indx]._id;
        const address = addressToUpdate[indx];
        delete address['_id'];
        const updateResponse = await AddressModel.updateOne({ _id }, address);
      }
    } catch (error) {
      console.log('error ', error)
      return reject(error);
    }

    return resolve();
  });
}

const postStudentsRecord = (req, res, next) => {
  const studentInformation = {
    rollNumber: req.body.rollNumber,
    studentFirstName: req.body.studentFirstName,
    studentLastName: req.body.studentLastName,
    class: req.body.class,
    parentContactNumber: req.body.parentContactNumber,
  }

  const student = new StudentModel(studentInformation);
  if (student.validateSync()) {
    res.status(401).json({ success: false });
  }

  const addressToUpdate = (req.body.address || [])
    .filter((addressObject) => addressObject._id ? true : false) || [];

  const addressToAdd = ((req.body.address || [])
    .filter((addressObject) => addressObject._id ? false : true) || [])
    .map(address => ({ ...address, studentId: req.body._id }));

  StudentModel.findOneAndUpdate({ _id: req.body._id }, studentInformation).then((status) => {
    AddressModel.insertMany(addressToAdd).then((status) => {

      updateMultipleAddress(addressToUpdate).then((status) => {

        return res.json({ success: true });

      }).catch(e => { throw new Error(e) });
    }).catch((e) => { throw new Error(e) });

  }).catch(err => {
    console.error('err', err);

    return res.status(500).json({ success: false });
  });
}
module.exports = postStudentsRecord;


