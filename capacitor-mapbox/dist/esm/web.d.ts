import { WebPlugin } from '@capacitor/core';
import { MapboxPlugin } from './definitions';
export declare class MapboxWeb extends WebPlugin implements MapboxPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openMap(location: {
        lat: number;
        long: number;
    }): Promise<void>;
}
declare const Mapbox: MapboxWeb;
export { Mapbox };
