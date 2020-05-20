import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Mapbox } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  openMap(lat, long) {
    console.log("mapbox is " + Mapbox);
    Mapbox.openMap({
      lat: lat, 
      long: long 
    });
  }

}
