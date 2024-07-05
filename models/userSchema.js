const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type:String,
    require:true
  },
  email :{
    type:String,
    require:true
  }
},{timestamps:true})


const Users = mongoose.model('Users',userSchema);
module.exports = Users;