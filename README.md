# Lemon Energia coding challenge

## Context

This project was developed as a coding challenge for a position at [Lemon](https://www.energialemon.com.br/).

The proposal requested an application, preferably using Node.js, capable of determining the elegibility of new clients. To facilitate the usage of such application it was made as a web API that receives the client's info and returns a simple report of eligibility.


These are the main technologies used:
* Node.js + express for the API.
* JSONSchema for input and output validation.
* Jest + supertest for testing.
* Github Actions for CI.


## Installation

### Pre-requisites:
* npm
### Setup:
* Clone the repository https://github.com/gcesconeto/lemon-coding-challenge.
* Open a terminal window inside the project folder and:
  * run `npm install`

## Using the API

Run `npm start` in the root directory. The only endpoint available is POST `/eligibility`" that receives the client's info and responds with an elegibility report.

The input data must be a JSON with the following structure:

```
{
  "numeroDoDocumento": "CPF or CNPJ (numbers only)",
  "tipoDeConexao": "monofasico" or "bifasico" or "trifasico",
  "classeDeConsumo": "residencial" or "industrial" or "comercial" or "rural" or "poderPublico",
  "modalidadeTarifaria": "azul" or "branca" or "verde" or "convencional",
  "historicoDeConsumo": [ array of power consumption of the last 3 to 12 months, in kWh ]
}
```

## Tests

Tests were created for the eligibility logic as well as the API, they are automatically run on Github Actions on all PRs to master. To run them locally use `npm run test`.


## Contact

* Guilherme Cesconeto
* [`Github`](https://github.com/gcesconeto)
