import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
declare var google; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() title: string = 'AGM project';
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() zoom: number=15;
  address: string;
  private geoCoder;
 
  @ViewChild('search',{static:true})
  public searchElementRef: ElementRef;
  origin: { lat: number; lng: number; };
  destination: { lat: number; lng: number; };
 
 
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { 
    this.getDirection();
  }
 
 
  ngOnInit() {
    //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //  // this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;
 
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["address"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result   google.maps.places.PlaceResult
    //       let place = autocomplete.getPlace();
 
    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
 
    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });
  }
 
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
 
 
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event['coords'].lat;
    this.longitude = $event['coords'].lng;
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }
 
  getDirection() {
      this.origin = { lat: 24.799448, lng: 120.979021 };
      this.destination = { lat: 24.799524, lng: 120.975017 };    
      // this.origin = 'Taipei Main Station';
      // this.destination = 'Taiwan Presidential Office';
    
  }

}
