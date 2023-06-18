import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  idCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
    let idCounter = localStorage.getItem('idCounter');
    if (!idCounter) {
      idCounter = '1';
    } else {
      idCounter = (Number(idCounter) + 1).toString();
    }
    localStorage.setItem('idCounter', idCounter);
  }

  getAll(): { [name: string]: User } {
    let users = localStorage.getItem('users') ?? '{}';
    return JSON.parse(users);
  }

  add(user: User) {
    user.id_user = Number(this.idCounter);

    this.idCounter += 1;
    localStorage.setItem('idCounter', JSON.stringify(this.idCounter));

    let users = this.getAll();
    users[user.username] = user;
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const allUsers = this.getAll();
    const user = allUsers[username];
    if(!user) {
      alert("Nom d'utilisateur introuvable");
    } else {
      if (user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      } else {
        alert("Mot de passe incorrect");
      }
    }
    return false;
  }
}
