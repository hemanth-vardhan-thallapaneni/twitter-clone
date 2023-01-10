import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { Tweet } from "../models/tweet";

const DATABASE_URL: string = "http://localhost:8080";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //Get all tweets for a user
  getAllTweets() {
    return this.http.get(`${DATABASE_URL}/api/all_tweets`);
  }

  //Send a tweet to server
  postTweet(tweet: FormData) {
    //Multipart/form-data is a must for a file to upload using "MULTER" lib
    let headers: any = new Headers().set("content-type", "multipart/form-data");
    this.http
      .post(`${DATABASE_URL}/api/post_tweet`, tweet, { headers: headers })
      .subscribe((res: any) => {
        return res;
      });
  }
  updateTweet(tweet: any) {
    this.http
      .patch(`${DATABASE_URL}/api/update_tweet`, tweet)
      .subscribe((res: any) => {
        return res;
      });
  }
}
