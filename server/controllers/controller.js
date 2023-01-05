const Aws = require('aws-sdk');
const tweet = require('../models/tweet')

const s3 = new Aws.S3({
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,              // accessKeyId that is stored in .env file
    secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET       // secretAccessKey is also store in .env file
})
const getAllTweets = ((req,res)=>{
    res.send('request succesfull!')
})
const postTweet = ( async (req,res)=>{  

    //     const params = {
    //         Bucket:process.env.AWS_BUCKET_NAME,      // bucket that we made earlier
    //         Key:req.file.originalname,               // Name of the image
    //         Body:req.file.buffer,                    // Body which will contain the image in buffer format
    //         ACL:"public-read-write",                 // defining the permissions to get the public link
    //         ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
    //     };
    //     s3.upload(params,(error,data)=>{
    //         if(error){
    //             res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
    //         }
    //         console.log(data)
    // })
   
    let tweet = JSON.parse(req.body.tweet)
    console.log('files',tweet)

 
})

module.exports = {
    getAllTweets,
    postTweet
}