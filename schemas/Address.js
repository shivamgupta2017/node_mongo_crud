const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = mongoose.Schema({
  state: { 
    required: true,
    type: String, 
  },
  district: { 
    type: String, 
    required: true
  },
  pin: {
    type: Number,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  houseName: {
    type: String,
    required: true,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  studentId: {
    type: Schema.Types.ObjectId,
    required: true,
  }
}, {
  timestamps: true
})

const Address = mongoose.model('address', AddressSchema)
module.exports = Address;
