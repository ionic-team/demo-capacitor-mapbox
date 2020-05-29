import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-mapbox';

const { Mapbox } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async openMap(lat, long) {
    await Mapbox.openMap({
      lat: lat, 
      long: long 
    });
  }

}
