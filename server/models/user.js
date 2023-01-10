const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName:{type:String,unique:true},
  userName:String,
  email:{type:String,unique:true},
  password:{ type: String},
  profilePic:String,
  likedTweets:{},

})
const user = mongoose.model('user',userSchema);
module.exports = user;