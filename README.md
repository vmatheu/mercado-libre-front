## Description

Aplicacion front para bucar productos dentro de la api de test de mercado libre.

para usar tenemos:
```bash
busqueda por texto: http://localhost:3000/item/search/{busqueda}
busqueda por id:  http://localhost:3000/item/id
root: http://localhost:3000/
```
para usar debemos ejecutar la [API](https://github.com/vmatheu/mercado-libre-api) o los mock stubby segun la forma que se levante.  

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

# dev mode
$ npm run stubby
$ npm run start:dev

```

## Test

```bash
# unit tests
$ npm run test
```

