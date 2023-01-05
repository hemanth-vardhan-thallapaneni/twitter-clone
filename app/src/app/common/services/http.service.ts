import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tweet } from "../models/tweet";

const DATABASE_URL: string = "http://localhost:8080/api";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //Get all tweets for a user
  getAllTweets() {
    this.http.get(`${DATABASE_URL}/all_tweets`).subscribe((tweets: any) => {
      return tweets;
    });
  }

  //Send a tweet to server
  postTweet(tweet: any) {
    //Multipart/form-data is a must for a file to upload using "MULTER" lib
    let headers: any = new Headers().set("content-type", "multipart/form-data");
    console.log(tweet);
    this.http
      .post(`${DATABASE_URL}/post_tweet`, tweet, { headers: headers })
      .subscribe((res: any) => {
        return res;
      });
  }
}
