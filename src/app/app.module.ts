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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

import { AosDirective } from './pages/aos.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    FeedComponent,
    LocationsComponent,
    UserprofileComponent,
    LocationsDetailComponent,
    AosDirective
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
    MatSidenavModule,
    ComponentsModule,
    ServicesModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    AosDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
