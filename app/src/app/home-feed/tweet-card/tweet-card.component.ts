import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/common/services/auth.service";

@Component({
  selector: "app-tweet-card",
  templateUrl: "./tweet-card.component.html",
  styleUrls: ["./tweet-card.component.scss"],
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: any;
  @Input() index: any;
  user_id: any = localStorage.getItem("user_id");
  @Output() tweetReaction: EventEmitter<any> = new EventEmitter();
  likeToggle: boolean = false;
  liked: string = "../../../assets/icons/liked.png";
  notLiked: string = "../../../assets/icons/not_liked.png";
  isLoggedIn: boolean = localStorage.getItem("user_id") ? true : false;
  constructor(private auth: AuthService) {}

  tweetLiked(status: boolean) {
    this.likeToggle = status;
    if (!this.tweet.hasOwnProperty("likedBy")) {
      this.tweet["likedBy"] = {};
    }
    if (!this.likeToggle) {
      this.tweet.likeCount =
        this.tweet.likeCount > 0 ? this.tweet.likeCount - 1 : 0;
      this.tweet.likedBy[this.user_id] = 0;
    } else {
      this.tweet.likeCount += 1;
      this.tweet.likedBy[this.user_id] = 1;
    }
    this.tweet.likedbyuser = localStorage.getItem("user_id");
    this.tweet.like = this.likeToggle;
    this.tweetReaction.emit(this.tweet);
  }

  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe((res: any) => {
      if (res) {
        this.isLoggedIn = res;
      }
    });
  }
}
