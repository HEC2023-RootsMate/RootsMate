import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  idCounter: number = 0;

  constructor() {
    let idCounter = localStorage.getItem('idCounter');
    if (idCounter == null) {
      idCounter = '0';
      localStorage.setItem('idCounter', idCounter);
    }
    this.idCounter = (Number(idCounter));
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

  getById(id: Number): User | null {
    const allUsers = this.getAll();
    for (let [_username, user] of Object.entries(allUsers)) {
      if (user.id_user === id) {
        return user;
      }
    }

    return null;
  }
}
