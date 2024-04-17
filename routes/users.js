const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/timetable4046');

const userSchema = new mongoose.Schema({
  username:{
    type: String
  },
  date:{
    type: String
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;