declare module "@capacitor/core" {
  interface PluginRegistry {
    Mapbox: MapboxPlugin;
  }
}

export interface MapboxPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  openMap(location: { lat: number, long: number}): Promise<void>;
}
