import { Component, OnInit } from "@angular/core";
import { Tweet } from "../common/models/tweet";
import { AuthService } from "../common/services/auth.service";
import { HttpService } from "../common/services/http.service";

@Component({
  selector: "app-home-feed",
  templateUrl: "./home-feed.component.html",
  styleUrls: ["./home-feed.component.scss"],
})
export class HomeFeedComponent implements OnInit {
  isDarkMode: boolean = false; // by default light mode theme is applied. Refer styles.css
  //disableMediaButtons: boolean = true; //After selecting a single file other inputs are disabled
  formdata = new FormData(); //Need formdata for uploading the media files to server
  media: string = "";
  tweets: any[] = [];
  tweetObj: any = {
    tweet: "",
    date: new Date(),
    user: localStorage.getItem("user_id"),
  };
  constructor(private http: HttpService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getAllTweets();
    this.auth.isLoggedIn.subscribe((res: any) => {
      if (res) {
        this.getAllTweets();
      }
    });
  }

  //This below method triggers darkmode for entire application.Refer the "dark-theme" class in styles.css
  darkMode() {
    this.isDarkMode = this.isDarkMode ? false : true;
    document.body.classList.toggle("dark-theme");
  }

  /*Below method is called when one of the icons in media-input is clicked and each video_type refers to 
  each kind of media input is clicked*/
  mediaInput(video_type: string) {
    document.getElementById(video_type)?.click();
  }

  //Below method triggers everytime we select a file.
  selectFile(event: any) {
    let media_file = event.target.files[0];
    /*Appending the file data to form data. We will send this tweetObj
    to server*/
    this.formdata.append("file", media_file, media_file.name);
    this.displayMedia(media_file);
  }

  /*Below method is used to display the image/video below the tweet before sending 
  to server*/
  displayMedia(media: File) {
    const reader = new FileReader();
    reader.readAsDataURL(media);
    reader.onload = (_event) => {
      this.media = reader.result as string;
    };
  }

  /*Triggers when tweet button is clicked*/
  postTweet() {
    this.tweetObj.date = new Date();
    this.formdata.append("tweet", JSON.stringify(this.tweetObj));
    this.http.postTweet(this.formdata);
    this.formdata = new FormData();
    this.tweetObj.tweet = "";
  }

  getAllTweets() {
    this.http.getAllTweets().subscribe((res: any) => {
      this.tweets = res["all_tweets"];
      console.log(this.tweets);
    });
  }

  updateTweet(tweet: any) {
    console.log(tweet);
    this.http.updateTweet(tweet);
  }
}
