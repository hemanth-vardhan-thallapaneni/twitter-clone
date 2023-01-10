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
    signUpUser,
    signInUser
} = require('../controllers/controller')

router.post('/signup_user',upload.single("file"),signUpUser)
router.post('/signin_user',signInUser)


module.exports = router;