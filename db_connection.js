let mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017';
const DB = 'schoolManagement';


mongoose.set('debug', true);

function Connection() {
  mongoose.connect(`${URL}/${DB}`)
  .then(() => {
    console.log('Database connection successful')
    
  })
  .catch(err => {
    console.error('Database connection error', err)
  })
}

module.exports = Connection
