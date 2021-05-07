const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
  rollNumber: {
    required: true,
    type: Number,
    unique: true,
  },
  studentFirstName: {
    type: String,
    required: true
  },
  studentLastName: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  parentContactNumber: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
})

const Student = mongoose.model('student', StudentSchema)
module.exports = Student;