const Aws = require('aws-sdk');
const tweet = require('../models/tweet')
const user = require('../models/user')
const bcrypt = require('bcryptjs');
const {ObjectId} = require('mongodb');


const s3 = new Aws.S3({
    accessKeyId:process.env.AWS_ACCESS_ID,              // accessKeyId that is stored in .env file
    secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET       // secretAccessKey is also store in .env file
})

//This function is used to get all the tweets from db
/*TODO: Pagination while getting all tweets */
const getAllTweets = ((req,res)=>{
     tweet.find().populate('user').exec().then((results)=>{
        res.status(200).send({status:"success",all_tweets:results})
     }).catch((err)=>{
        console.log(err)
             res.status(500).send({status:"Failed",message:err})
     })
   
})

//This function is used to post a tweet to db.
const postTweet = ( async (req,res)=>{  

    //checking if we there is any file needs to be uploaded.
    if(req.file){
        //if there is no error and the file is uploaded then this function is called
        processTweet(JSON.parse(req.body.tweet),res,req,AWS_file_upload);  
    }
    else{
        //If there is no file uploaded by user then empty file data is sent.
        processTweet(JSON.parse(req.body.tweet),res);
    }
   file_data = '';

})

const updateTweet = ( async (req,res)=>{
    let tweet_id = {}
   if(req.body.like){
    tweet_id[req.body._id] = 1;
    await user.updateOne(
        {_id:req.body.likedbyuser},
        {
            $set: {"likedTweets": tweet_id }
        }
        )
    await tweet.updateOne(
    {_id:req.body._id},
    { $set:{"likeCount":req.body.likeCount,"likedBy":req.body.likedBy}
   })
   }
   else{
    tweet_id[req.body._id] = 0;
    await user.updateOne(
        {_id:req.body.likedbyuser},
        {
            $set: {"likedTweets": tweet_id}
        }
        )
      await tweet.updateOne(
         {_id:req.body._id},
         {
         $set:{"likeCount":req.body.likeCount, "likedBy":req.body.likedBy},
         }
    )
   }
    res.status(200).send({status:'ok'})
 })

const signUpUser = (async (req,res)=>{
  let user_data = JSON.parse(req.body.user_details); //parsing the stringfied JSON.
    if(req.file){
        let data = await AWS_file_upload(req);
        user_data['profilePic'] = data.Location;
      }
      else{
          user_data['profilePic'] = 'https://hemanth-twitter-clone-bucket.s3.amazonaws.com/profile.png';
      }
      user_data['userName'] = user_data['email'].slice(0, user_data['email'].indexOf("@"));
      user_data['password'] = await bcrypt.hash(user_data['password'],10); 
   let user_details =  await user.create(user_data);   
     user_details['password'] = '';
    res.status(200).send({message:'User Successfully Created!',data:user_details})


})

const signInUser = (async(req,res)=>{
    
    let details = await user.findOne({email:req.body.email})
    console.log(details)
    if(details){
        bcrypt.compare(req.body.password,details.password,(err,resp)=>{
            console.log(err)
            if(err){
               console.log('bycrypt error',err)
            }
            if(resp){
                details.password = '';
                console.log(resp)
                res.send({message:'Login successfull!',status:'ok',data:details})
            }
            else{
                res.send({message:'Check your credentials!',status:'error'})
            }
           
         })
      } 
      else{
        res.status(404).send({message:"User Not Found!"})
      }
})

//This asyncronus function is used to upload the file to AWS and return the response after upload.
async function AWS_file_upload(req){
    const params = {
        Bucket:process.env.AWS_BUCKET_NAME,      // bucket that we made earlier
        Key:req.file.originalname,               // Name of the image
        Body:req.file.buffer,                    // Body which will contain the image in buffer format
        ACL:"public-read-write",                 // defining the permissions to get the public link
        ContentType:"image/jpeg"                 // Necessary to define the image content-type to view the photo in the browser with the link
    };
    try {
       return await s3.upload(params).promise();
      
    } catch (error) {
        console.log('err',error)
        res.status(500).send({"err":error})  // if we get any error while uploading error message will be returned.
    }

}


//Async Function to upload the tweet to db
async function processTweet(tweet_data,res,req,func,){
if(func){
    let file_data = await func(req); //waiting for the file to upload in AWS.
    tweet_data['media'] = file_data.Location
}
    tweet.create(tweet_data); //tweet is the imported schema. 
    res.status(200).send({status:"success"})
    
}


module.exports = {
    getAllTweets,
    postTweet,
    updateTweet,
    signUpUser,
    signInUser
}