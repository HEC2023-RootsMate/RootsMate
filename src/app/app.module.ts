import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FeedComponent } from './pages/feed/feed.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { LocationsDetailComponent } from './pages/locations/locations-detail/locations-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    FeedComponent,
    LocationsComponent,
    UserprofileComponent,
    LocationsDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ComponentsModule,
    ServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
