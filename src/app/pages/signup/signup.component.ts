import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = new User(0, '', '', '', '', 'https://i.stack.imgur.com/34AD2.jpg', '');

  constructor(private router: Router, private usersService: UsersService) { }

  onSubmit() {
    this.usersService.add(this.user);
    this.router.navigate(['/signin']);
  }
}
