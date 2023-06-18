import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user: User = new User(0, '', '', '', '', '', '');
  showFiller = false;

  constructor(private router: Router ) {

  }

  ngOnInit() {
    const title = 'RootsMate';

    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.user = JSON.parse(userData);
    } 
  }

}
