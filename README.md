# Demo: Building a Capacitor plugin for Mapbox

This is a reference app showing how to build a Capacitor plugin for [Mapbox](https://www.mapbox.com/), a mapping, vision, and navigation SDK for developers.

To see this app in action, check out the [Capacitor 2.0 Launch presentation](https://ionicframework.com/resources/webinars/capacitor-2-launch). Learn how to create your own cross-platform Capacitor plugin [here](https://capacitor.ionicframework.com/docs/plugins).

## User Experience

This [Capacitor](https://capacitor.ionicframework.com) plugin wraps the [Mapbox Android SDK](https://docs.mapbox.com/android/maps/overview/). The plugin, when used in an Ionic Angular app, opens a full-screen map pointed at a variety of locations specified by the developer (based on latitude/longitude coordinates).

## Implementation Details

`capacitor-mapbox` contains the Mapbox plugin with Android implementation. The interface is defined in `src/definitions.ts`. The main Android code that leverages the Mapbox Android SDK is in `capacitor-mapbox/android/src/main/java/com/ionicframework/cap/mapbox/Mapbox.java`.

`android` contains the Android app project.

The root of the project (and `src`) contains an Ionic Angular app, a modified version of the Ionic `blank` starter project. On the `Home` page, several buttons appear for different locations - tapping them displays a native Mapbox map, pointing at various lat/long coordinates. Point to different map locations by changing the coordinates in `home.page.html`.

## How to Run

- Install Ionic and native-run: `npm install -g @ionic/cli native-run`.
- Clone this repository.
- In a terminal, change directory into the repo: `cd demo-capacitor-mapbox`.

### Build and link the Mapbox plugin:

The Capacitor Mapbox plugin is not published on npm (and shouldn't be since it's just a demo). That said, you can install and run it locally.

- Change into the plugin directory: `cd capacitor-mapbox`.
- Run `npm run build` to build the plugin.
- Run `npm link`
- Change back into the app directory: `cd ..`
- Run `npm link capacitor-mapbox`
- Run `npm install` to install all project dependencies, including the local `capacitor-mapbox` plugin.

### Test the plugin

- Sync the Android project: `npx cap sync`. If configured correctly, the log should print something similar to "Found 1 Capacitor plugin for android: capacitor-mapbox (0.0.1)"
- Run `ionic build` to build the Ionic app.
- Run `npx cap sync android` to sync the project again.
- Run `npx cap open android` to open Android Studio. From here, connect a device then press play to try the app!
