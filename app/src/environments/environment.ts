// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GOOGLE_CLIENT_ID:
    "150837867795-fsh5a9a6vu6tuieucj48m64j7dl0smt5.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET:
    "150837867795-fsh5a9a6vu6tuieucj48m64j7dl0smt5.apps.googleusercontent.com",
  PUBLIC_GOOGLE_OAUTH_REDIRECT_URL:
    "http://localhost:8080/api/sessions/oauth/google",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
