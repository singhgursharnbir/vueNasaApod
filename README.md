# vue-nasa-apod

This app uses Vue, Vuex, Bootstrap, Bootstrap-vue, vuex-persist and js-cookie to build a web app where user can see images fetched from NASA apod api. 

## Some Features

1. User can today's featured image
2. User can go back or forward in days using arrows
3. User can select a date to navigate to that date 
4. User can give there on visitin the app and it get stored as cookie for 1 day 
5. User can save their favourite date and it will stored as a local storage which can shown quickly whenever user want to 

##To get the frontend running locally:

1. Clone this repo
2. cd to repo like cd .\vueNasaApod
3. npm install to install all req'd dependencies( make sure have npm installed if not install NPM ). Make sure package.json is in directory before running npm install
4. npm run serve to start the local server 
5. Open http://localhost:8080 to view it in the browser.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
