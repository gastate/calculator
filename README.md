**Serverless + Typescript calculator** – Sample api built using familiar calculator functionality to demonstrate how Serverless can be used to deploy a fleet of micro-services.

** Instructions: **
Something seems to be wrong with our Addition logic -- can you find and fix the bug?  Can you make all tests pass?

**Usage:**

[npm run globals] -- set up dependencies

[npm install] -- pull down any missing dependencies

[npm run start] -- compile and run the project locally

[cloud 9]:  Run --> Preview --> Launch to set up the running API;  Edit web/index.html with the new base_url and preview the page

[npm run test] -- compile and run unit tests 

[npm run cover] -- compile and run coverage repot


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


