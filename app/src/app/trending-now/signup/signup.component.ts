import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/common/services/auth.service";
import { HttpService } from "src/app/common/services/http.service";

declare const gapi: any;

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  isSignUp: boolean = true;
  formdata: FormData = new FormData();
  signUpForm = {
    email: null,
    displayName: null,
    password: null,
  };

  constructor(private http: HttpService, private auth: AuthService) {}

  ngOnInit(): void {}

  profilePicUpload(event: any) {
    let media_file = event.target.files[0];
    this.formdata.append("file", media_file, media_file.name);
  }

  userSignUp() {
    if (!this.isSignUp) {
      this.auth.signUp(this.signUpForm, false);
      return;
    }
    this.formdata.append("user_details", JSON.stringify(this.signUpForm));
    this.auth.signUp(this.formdata, true);
  }
  alreadyUser() {
    this.isSignUp = this.isSignUp ? false : true;
  }
}
