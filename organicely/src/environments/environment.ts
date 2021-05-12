// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app: {
    apiBaseUrl: "https://organicely-default-rtdb.firebaseio.com/"
  },
  auth: {
    apiBaseUrl: "https://identitytoolkit.googleapis.com",
    key: "AIzaSyAp98lMlp0k7yYFcngYDzpxmksv9IKIya4"
  },
  firebaseConfig : {
    apiKey: "AIzaSyAp98lMlp0k7yYFcngYDzpxmksv9IKIya4",
    authDomain: "organicely.firebaseapp.com",
    databaseURL: "https://organicely-default-rtdb.firebaseio.com",
    projectId: "organicely",
    storageBucket: "organicely.appspot.com",
    messagingSenderId: "244873638602",
    appId: "1:244873638602:web:fb801966fc37e7563b7a33",
    measurementId: "G-L6371R4MPH"
  },
  zoomAuth : "ak44R3R0eEpSbk9sSUduVnNEeXkwUTpPSncwVHVTT3JRNVNMRDVWeGFnelh5eW96RXpyZngyMQ=="
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
