import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  //list of all navigation routes
  navItems: any[] = [
    {
      name: "Home",
      icon: "home",
      router: "/home",
    },
    {
      name: "Explore",
      icon: "hashtag",
      router: "/explore",
    },
    {
      name: "Notifications",
      icon: "bell",
      router: "/notifications",
    },
    {
      name: "Messages",
      icon: "envelope",
      router: "/messages",
    },
    {
      name: "Bookmarks",
      icon: "bookmark",
      router: "/bookmark",
    },
    {
      name: localStorage.getItem("display_name")?.length
        ? localStorage.getItem("display_name")
        : "Profile",
      icon: "profile",
      router: "/profile",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
