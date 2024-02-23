// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: "cbb29b90dad642a6b2d0d4fb9b651086",
  apiUrl:'https://newsapi.org/v2/everything?' +
  'q=Animation&' +
  'from=2024-01-22&' +
  'sortBy=popularity&' +
  'apiKey=cbb29b90dad642a6b2d0d4fb9b651086'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
