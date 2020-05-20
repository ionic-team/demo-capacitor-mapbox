import { WebPlugin } from '@capacitor/core';
import { MapboxPlugin } from './definitions';

export class MapboxWeb extends WebPlugin implements MapboxPlugin {
  constructor() {
    super({
      name: 'Mapbox',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async openMap(location: { lat: number, long: number}): Promise<void> {
    console.log(`Can't open ${location} - Web is not supported.`);
  }
}

const Mapbox = new MapboxWeb();

export { Mapbox };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Mapbox);
