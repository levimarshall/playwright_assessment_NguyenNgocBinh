# GovTech Assessment project guideline

## Getting started

#### Prerequisites:
+ Node.js version 16+
+ npm
+ cucumber
+ playwright
+ playwrightbdd
#### Make sure you already have [nodejs](https://nodejs.org/en/download) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), after cloning the project, run the following commands in the project's terminal to install required modules:

```
npm i
```


#### If this fails, delete the `node_modules` directory and `package-lock.json` file and try again the above command.

## Execute test case

#### Below is the command to open Playwright UI mode and run the feature file
```
npm test
```
#### If you wanna run the test case with mobile configuration, please disable the web configuration and enable the mobile configuration in `playwright.config.ts` file

## Reporting

#### The report is automatically generated in [cucumber-report]() folder. Open the report in web browser to see the result for each execution.
