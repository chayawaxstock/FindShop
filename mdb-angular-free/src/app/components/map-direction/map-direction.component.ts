import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-map-direction',
  templateUrl: './map-direction.component.html',
  styleUrls: ['./map-direction.component.scss']
})
export class MapDirectionComponent implements OnInit {

  @Input() title: string = 'AGM project';
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() zoom: number = 15;
  address: string;
  private geoCoder;

  origin: { lat: number; lng: number; };
  destination: { lat: number; lng: number; };
  latitude2: number;
  longitude2: number;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };    
    this.setCurrentLocation();
  }


  ngOnInit() {
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude2 = position.coords.latitude;
        this.longitude2 = position.coords.longitude;
        this.getDirection();
      });
    }
  }

  getDirection() {
    this.origin = { lat: this.latitude2, lng: this.longitude2 };
    this.destination = { lat: this.latitude, lng: this.longitude };
  }

}
