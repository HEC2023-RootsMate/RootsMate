import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../../models/location.model';

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.component.html',
  styleUrls: ['./locations-detail.component.scss']
})
export class LocationsDetailComponent implements OnInit {
  id: number | null = null;
  location: Location | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      const locationsData = localStorage.getItem('locations');
      if (locationsData) {
        const allLocations: Location[] = JSON.parse(locationsData);
        this.location = allLocations.find(loc => loc.id_location === this.id) || null;

      }
    } else {
      this.router.navigate(['/locations']);
    }
  }
}
