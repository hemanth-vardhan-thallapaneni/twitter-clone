const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  tweet: String,
  date: Date,
  media: {
    img: String,
    video: String
  },
  user_id: Number
},{timestamps: true})
//The “timestamp: true” option will create “createdAt,” and “updatedAt” fields for the tweet model

const tweet = mongoose.model('tweet',tweetSchema);
module.exports = tweet;