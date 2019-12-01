# TrafficMeister

This project was built for a Dev Case test for a job,
generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

### Built With

* [@angular/material](https://material.angular.io/)
* [@angular/cli](https://angular.io/)
* [@angular/flex-layout](https://github.com/angular/flex-layout)
* [Express](https://expressjs.com)
* [LottieFiles](https://lottiefiles.com/)

## Installation

After you clone repository
Run $ `npm i`

## Development server

Run `node server/app.js` and then `ng serve` for a dev server or `npm run start:tm`
Navigate to `http://localhost:4200/` The app will automatically reload if you change any of the source files.

## API Reference

**Types**
----
  Returns json array data about vehicules types.

* **URL**

  `/types/`

* **Method:**

  `GET`
  
* **Success Response:**

Code: 200
Content:  [
    {
      id: 1,
      type: 'car',
      brand: 'Bugatti Veyron',
      colors: ['red', 'black'],
      img: 'https://upload.wikimedia.org....jpg'
    },...
    }]

* **Sample Call:**

`localhost:3000/types`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
init the app `npm run start:tm`
Run `npm run cypress:open` to execute the end-to-end tests via Cypress

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
