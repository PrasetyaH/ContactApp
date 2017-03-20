# ContactApp
#### Awosome useful contact application lets you create,update and delete your personal contact anywhere you want
# Getting Started
In ordr to run this app make sure you already setup Node Js and some requirment in your system. Follow this step and you will able to run this Contact Application
## Requirement
First install Node Js to your system, I recomend you use nvm to install Node js
###### Install NVM version 0.30.2
```sh
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```
###### Install Node Js version 0.30.2
After nvm installed you can install Node js by type :
```sh
$ nvm install v6.0.0
```
I use PostgreSQL in this app so if you want you can install same or use your prefer RDBMS
###### Install PostgreSQL
```sh
$ sudo apt-get update
$ sudo apt-get install postgresql postgresql-contrib
```
Make sure you install nodemon as well so we can easy to run this app
###### Install Nodemon
```sh
$ npm install -g nodemon
```
# Installing
Now after you setup all environtment time to run this app, make sure you already download or clon this app,then go to config folder then config.json. Edit this file and match to you environtment. Chage username,password,database and dialect base on your system.
```sh
{
  "development": {
    "username": "herwin",
    "password": "prasetya89",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "herwin.prasetyo",
    "password": "prasetya89",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "herwin.prasetyo",
    "password": "prasetya89",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
# Running Application
To run this app simply just type bellow command in your terminal

```sh
$ nodemon start
```
# External Links
You can use these below link to learn more about setup your environtment
###### [Node Js](https://nodejs.org/en/)
###### [Sequelize](http://docs.sequelizejs.com/en/v3/)
###### [Express JS](https://expressjs.com/en/starter/installing.html)
