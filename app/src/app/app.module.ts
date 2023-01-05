import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeFeedComponent } from "./home-feed/home-feed.component";
import { TrendingNowComponent } from "./trending-now/trending-now.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeFeedComponent,
    TrendingNowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
