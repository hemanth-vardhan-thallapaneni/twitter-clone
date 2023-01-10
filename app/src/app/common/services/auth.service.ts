import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";

const DATABASE_URL: string = "http://localhost:8080";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  signUp(user_details: any, isSignUp: boolean) {
    if (isSignUp) {
      let headers: any = new Headers().set(
        "content-type",
        "multipart/form-data"
      );
      this.http
        .post(`${DATABASE_URL}/auth/signup_user`, user_details, {
          headers: headers,
        })
        .subscribe((res: any) => {
          localStorage.setItem("user_id", res["data"]["_id"]);
          localStorage.setItem("display_name", res["data"]["displayName"]);
          this.isLoggedIn.next(true);
        });
    } else {
      this.http
        .post(`${DATABASE_URL}/auth/signin_user`, user_details)
        .subscribe((res: any) => {
          console.log(res);
          this.isLoggedIn.next(true);
          localStorage.setItem("user_id", res["data"]["_id"]);
          localStorage.setItem("display_name", res["data"]["displayName"]);
        });
    }
  }
}
