import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Location } from '../../models/location.model';
import { LocationUser } from '../../models/location-user.model';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  user: User = new User(0, '', '', '', '', '', '');
  users: User[] = [];
  location: Location = new Location(0, '', '', '', [], new Date());
  locations: Location[] = [];
  locationUsers: LocationUser[] = [];
  followedUsers: User[] = [];
  constructor(private router: Router) { }
  showContainer1: boolean = true;

  ngOnInit() {

    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/signin']);
    }

    const usersData = localStorage.getItem('users');
    if (usersData) {
      this.users = JSON.parse(usersData);
    }

    const locationUsersData = localStorage.getItem('locationUsers');
    if (locationUsersData) {
      this.locationUsers = JSON.parse(locationUsersData);
    }

    const locationsData = localStorage.getItem('locations');
    if (locationsData) {
      const allLocations: Location[] = JSON.parse(locationsData);
      const userLocationIds = this.locationUsers.filter(lu => lu.id_user === this.user.id_user).map(lu => lu.id_location);
      this.locations = allLocations.filter((loc: Location) => userLocationIds.includes(loc.id_location));
    }


  }

  toggleContainer() {
    this.showContainer1 = !this.showContainer1;
    window.scrollTo(0, 0);
  }

  onUpdateProfile() {
    localStorage.setItem('currentUser', JSON.stringify(this.user));
  }

  onAddLocation() {
    let locationIdCounter = localStorage.getItem('locationIdCounter');
    if (!locationIdCounter) {
      locationIdCounter = '1';
    } else {
      locationIdCounter = (Number(locationIdCounter) + 1).toString();
    }
    localStorage.setItem('locationIdCounter', locationIdCounter);

    const newLocation: Location = new Location(
      Number(locationIdCounter),
      this.location.url_image,
      this.location.description,
      this.location.name,
      this.location.tags,
      new Date()
    );
    this.locations.push(newLocation);

    let allLocationsData = localStorage.getItem('locations');
    let allLocations: Location[] = [];
    if (allLocationsData) {
      allLocations = JSON.parse(allLocationsData);
    }
    allLocations.push(newLocation);
    localStorage.setItem('locations', JSON.stringify(allLocations));

    this.location = new Location(newLocation.id_location, '', '', '', [], new Date());

    const newLocationUser: LocationUser = {
      id_user: this.user.id_user,
      id_location: newLocation.id_location,
      is_owner: true
    };
    this.locationUsers.push(newLocationUser);
    localStorage.setItem('locationUsers', JSON.stringify(this.locationUsers));

    alert('Lieu créé avec succès');
  }


  onDeleteLocation(id: number) {
    this.locations = this.locations.filter(location => location.id_location !== id);
    localStorage.setItem('locations', JSON.stringify(this.locations));
  }

  onUnfollowLocation(id: number) {
    //TODO
  }

  onViewDetails(id: number) {
    this.router.navigate(['/locations', id]);
  }


  getUsernameById(id: number): string {
    for (let i = 0; i < localStorage.length; i++) {
      const username = localStorage.key(i);

      if (username) {
        const userItem = localStorage.getItem(username);

        if (userItem) {
          const user = JSON.parse(userItem);

          if (user && user.id_user === id) {
            return user.username;
          }
        }
      }
    }

    return '';
  }

  getUserNameByLocationId(id: number): string {
    const locationUser = this.locationUsers.find(lu => lu.id_location === id && lu.is_owner);
    if (locationUser) {
      return this.getUsernameById(locationUser.id_user);
    }
    return '';
  }

  isCurrentUserOwner(location: Location): boolean {
    const locationUser = this.locationUsers.find(lu => lu.id_location === location.id_location && lu.is_owner);
    return !!this.user && !!locationUser && this.user.id_user === locationUser.id_user;
  }





}
