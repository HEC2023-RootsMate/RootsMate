import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsDetailComponent } from './locations-detail.component';

describe('LocationsDetailComponent', () => {
  let component: LocationsDetailComponent;
  let fixture: ComponentFixture<LocationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsDetailComponent]
    });
    fixture = TestBed.createComponent(LocationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
