const express = require("express");
const router = express.Router();
const multer  = require("multer");
require("dotenv").config();

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, '')
    }
})
const upload = multer({ storage: storage});

const {
    getAllTweets,
    postTweet,
    updateTweet,
} = require('../controllers/controller')



router.get('/all_tweets',getAllTweets)
router.post('/post_tweet',upload.single("file"),postTweet)
router.patch('/update_tweet',updateTweet)



module.exports = router;