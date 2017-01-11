**Serverless + Typescript calculator** – Sample api built using familiar calculator functionality to demonstrate how Serverless can be used to deploy a fleet of micro-services.

**Contents of the Project** 

*package.json* contains the description of the packages we will be using

*serverless.yml* describes the AWS API Gateway and Lambda structure that our functions will deploy into

*functions Folder* contains the Lambda Functions that will be deployed to AWS

*test folder* contains the unit tests and mirrors the layout of the functions folder

*.serverless folder* generated folder containing deployment artifacts

*coverage folder* generated folder containing Istanbul coverage reports

*node_modueles folder* generated folder containing dependencies

*out folder* generated folder containing transpiled code

*typings folder* generated folder containing Typescript definitions files

*web folder* helper folder containing the front-end code for the calculator

**Technologies Incorporated:**

Typescript - Typescript and ES6 codebase which compiles and deploys as ES5 javascript

Typings - Typscript definitions manager, used to map between TS and JS

Serverless - Deployment helper which takes our described infrastructure and manages pushing the local code up to AWS

Mocha - Test runner

Istanbul - Static analysis tool to generate test coverage reports



**Usage:**

[npm globals] -- set up global dependencies

[npm install] -- pull down any missing dependencies

[npm run start] -- start the project locally 

[npm run test] -- transpile and run unit tests

[npm run cover] -- transpile and generate coverage reports

This calculator comes equipped with four HTTP Routes:
```sh
  POST /add
  POST /subtract
  POST /multiply
  POST /divide
```
Each of these expects a JSON payload containing numbers "a" and "b", like so:

```sh
POST /add HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
Cache-Control: no-cache

{ "a": 1, "b": 2}
```
