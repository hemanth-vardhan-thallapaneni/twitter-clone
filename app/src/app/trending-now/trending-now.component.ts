import { Component, OnInit } from "@angular/core";
import { AuthService } from "../common/services/auth.service";

@Component({
  selector: "app-trending-now",
  templateUrl: "./trending-now.component.html",
  styleUrls: ["./trending-now.component.scss"],
})
export class TrendingNowComponent implements OnInit {
  constructor(private auth: AuthService) {}
  showSignUp: boolean = localStorage.getItem("user_id") ? true : false;
  ngOnInit(): void {
    this.auth.isLoggedIn.subscribe((res: any) => {
      if (res) {
        this.showSignUp = res ? true : false;
      }
    });
  }
}
