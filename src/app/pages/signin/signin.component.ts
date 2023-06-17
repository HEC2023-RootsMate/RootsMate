import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  user = new User(0, '', '', '', '', '', '');

  constructor(private router: Router) { }


  onSubmit() {
    const userInStorage = localStorage.getItem(this.user.username);
    if (userInStorage) {
      const userStored = JSON.parse(userInStorage);
      if (userStored.password === this.user.password) {
        localStorage.setItem('currentUser', JSON.stringify(userStored));
        this.router.navigate(['/userprofile']);
      } else {
        alert("Mot de passe incorrect");
      }
    } else {
      alert("Nom d'utilisateur introuvable");
    }
  }

}