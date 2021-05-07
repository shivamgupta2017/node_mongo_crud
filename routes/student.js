var express = require('express');
var router = express.Router();
const postStudentsRecord = require('../controller/postStudentsRecord');
const fetchStudentsRecord = require('../controller/fetchStudentsRecord');
const deleteStudentsRecord = require('../controller/deleteStudentsRecord');
const fetchStudentRecord = require('../controller/fetchStudentRecord');
const updateStudentRecord = require('../controller/updateStudentRecord');

router.get('/:id', fetchStudentRecord);
router.get('/', fetchStudentsRecord);
router.post('/', postStudentsRecord);
router.put('/', updateStudentRecord);
router.delete('/:id', deleteStudentsRecord);


module.exports = router;
