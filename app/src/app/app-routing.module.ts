import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeedComponent } from './home-feed/home-feed.component';

const routes: Routes = [
  { path: 'home', component: HomeFeedComponent },
  { path: '**', component: HomeFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
