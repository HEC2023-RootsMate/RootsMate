import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FeedComponent } from './pages/feed/feed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { LocationDetailComponent } from './pages/locations/locations-detail/location-detail/location-detail.component';
import { LocationsDetailComponent } from './pages/locations/locations-detail/locations-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    FeedComponent,
    ProfileComponent,
    LocationsComponent,
    UserprofileComponent,
    LocationDetailComponent,
    LocationsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
