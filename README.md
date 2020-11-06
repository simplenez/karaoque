# Karaoque

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Initial setup

Run `npmm ci` to install from package-lock.json (faster).  Or run 'npm i' to install from package.json.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To stop: press `Ctrl + c` then y.

## Code scaffolding

Run `ng g c components/component-name --flat -is --skipTests` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Roadmap
* Ian starts a slack workspace to share 
* 3 routes:  / for initialization  /home for HomeComponent  /search for SearchComponent /status  StatusComponent.  
    * Hai to set up skeleton. [DONE]
    * Ian - HomeComponent
    * Ankita StatusComponent
* if going to '**' should go to app component. 
    * At app component, if the user has the address and password parameter, store values, test by retrieving status. 
        * Redirect to /status if successful
        * Redirect to /home to prompt for info
    * At home, 
        * if not initialized show fields enter username and password.  
            * When they submit, validate.  If successful, go to /status or stay at home?
        * If initialized, show QR code
    * Hai - initialization and routes   [DONE]



