let mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017';
const DB = 'schoolManagement';
let dbConnection;

mongoose.set('debug', true);
function doConnection() {
  mongoose.connect(`${URL}/${DB}`)
  .then(() => {
    console.log('Database connection successful')
    
  })
  .catch(err => {
    console.error('Database connection error', err)
  })

}
doConnection();
module.exports = () => {
  return dbConnection;
}
