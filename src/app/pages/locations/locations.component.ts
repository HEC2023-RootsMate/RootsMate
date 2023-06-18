import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  constructor(private router: Router) { }


  ngOnInit() {
    const locationsData = localStorage.getItem('locations');

    if (locationsData) {
      this.locations = JSON.parse(locationsData);
    }
  }

  onViewDetails(id: number) {
    this.router.navigate(['/locations', id]);
  }

}
