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
  location: Location = new Location(0, '', '', '', [], new Date());
  locations: Location[] = [];
  locationUsers: LocationUser[] = [];
  followedUsers: User[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/signin']);
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

  onUpdateProfile() {
    localStorage.setItem('currentUser', JSON.stringify(this.user));
  }

  onAddLocation() {
    const newLocation: Location = new Location(
      this.locations.length + 1,
      this.location.url_image,
      this.location.description,
      this.location.name,
      this.location.tags,
      new Date()
    );
    this.locations.push(newLocation);
    localStorage.setItem('locations', JSON.stringify(this.locations));
    this.location = new Location(this.locations.length + 1, '', '', '', [], new Date());

    const newLocationUser: LocationUser = {
      id_user: this.user.id_user,
      id_location: newLocation.id_location,
      is_owner: true
    };
    this.locationUsers.push(newLocationUser);
    localStorage.setItem('locationUsers', JSON.stringify(this.locationUsers));
  }

  onDeleteLocation(id: number) {
    this.locations = this.locations.filter(location => location.id_location !== id);
    localStorage.setItem('locations', JSON.stringify(this.locations));
  }

  onViewDetails(id: number) {
    this.router.navigate(['/locations', id]);
  }

}
