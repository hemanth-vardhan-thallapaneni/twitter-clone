const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  tweet: String,
  date: Date,
  media: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
  likeCount:{type:Number,default:0},
  likedBy:{},
},{timestamps: true})
//The “timestamp: true” option will create “createdAt,” and “updatedAt” fields for the tweet model

const tweet = mongoose.model('tweet',tweetSchema);
module.exports = tweet;