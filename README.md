# Lemon Energia coding challenge

## Context

This project was developed as a coding challenge for a position at [Lemon](https://www.energialemon.com.br/).

The proposal requested an application, preferably using Node.js, capable of determining the elegibility of new clients. To facilitate the usage of such application it was made as a web API that receives the client's info and returns a simple report of eligibility.


These are the main technologies used:
* Node.js + express for the API.
* JSONSchema + Ajv for input and output validation.
* Jest + supertest for testing.
* Github Actions for CI.
* Docker + Heroku for deploy.


## Running the API

### Pre-requisites:
* npm with Node.js v14.x +
### Setup:
* Clone the repository https://github.com/gcesconeto/lemon-coding-challenge.
* Open a terminal window inside the project folder and:
  * run `npm install` to install dependencies
  * run `npm start` to start the server locally on port 3000

## Using the API

The API is currently hosted at https://gcesconeto-lemon-challenge.herokuapp.com/

To check a client's eligibility send a `POST` request to `/eligibility` endpoint with a JSON body like below:

```
{
  "numeroDoDocumento": "CPF or CNPJ (string with numbers only)",
  "tipoDeConexao": "monofasico" or "bifasico" or "trifasico",
  "classeDeConsumo": "residencial" or "industrial" or "comercial" or "rural" or "poderPublico",
  "modalidadeTarifaria": "azul" or "branca" or "verde" or "convencional",
  "historicoDeConsumo": [ array of power consumption of the last 3 to 12 months, in kWh ]
}
```
If the data was sent correctly the API responds with the report. Otherwise an error message will be sent.

## Tests

Tests were created for the eligibility logic as well as the API, they are automatically run on Github Actions on all PRs to master. To run them locally use `npm run test`.


## Contact

* Guilherme Cesconeto
* [`Github`](https://github.com/gcesconeto)
