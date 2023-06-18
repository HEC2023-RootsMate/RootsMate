import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user = new User(0, '', '', '', '', '', '');

  constructor(private router: Router, private usersService: UsersService) { }


  onSubmit() {
    if(this.usersService.login(this.user.username, this.user.password)) {
      this.router.navigate(['/userprofile']);
    }
  }
}
