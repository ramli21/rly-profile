# rly-profile

this is the site were will show up my portfolio and the jobs history as a programmer. i'm using laravel and reactjs to build this site.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

first, you need to clone the app to your project directory, and follow this intruction.

```
npm install && npm run dev
```

open your *phpmyadmin* and create the database name **db_rly**

and then run the migration to build the tables

```
php artisan migrate
```

run the app server

```
php artisan serve
```

to build the assets precompile, open a new tab in the console and then run this command

```
npm run watch
```


## Built With

* [Laravel](https://laravel.com/docs/5.6/) - The web framework used (5.6.*)
* [ReactJS](https://reactjs.org/) - The (16.2.0)
* [Bootstrap](https://getbootstrap.com/) - The web frontend framework used (4.0.0)
