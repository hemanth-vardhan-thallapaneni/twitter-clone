import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeFeedComponent } from "./home-feed/home-feed.component";
import { TrendingNowComponent } from "./trending-now/trending-now.component";
import { TweetCardComponent } from "./home-feed/tweet-card/tweet-card.component";
import { SignupComponent } from "./trending-now/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeFeedComponent,
    TrendingNowComponent,
    TweetCardComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
