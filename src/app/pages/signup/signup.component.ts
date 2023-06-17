import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = new User(0, '', '', '', '', 'https://i.stack.imgur.com/34AD2.jpg', '');

  constructor(private router: Router) { }

  onSubmit() {
    let idCounter = localStorage.getItem('idCounter');
    if (!idCounter) {
      idCounter = '1';
    } else {
      idCounter = (Number(idCounter) + 1).toString();
    }
    localStorage.setItem('idCounter', idCounter);

    this.user.id_user = Number(idCounter);
    localStorage.setItem(this.user.username, JSON.stringify(this.user));
    this.router.navigate(['/signin']);
  }
}