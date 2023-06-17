import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationsDetailComponent } from './pages/locations/locations-detail/locations-detail.component';
import { FeedComponent } from './pages/feed/feed.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: LocationsDetailComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
