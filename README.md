# GovTech Assessment project guideline

## Getting started

#### Prerequisites:
+ Node.js version 16+
+ npm
+ cucumber
+ playwright
+ playwrightbdd
#### Make sure you already have [nodejs](https://nodejs.org/en/download) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), after clone the project, run the following commands in the project's terminal to install required modules:

```
npm i
```


#### If this fails, delete the `node_modules` directory and `package-lock.json` file and try again the above command.

## Execute test case

#### Here are command to open Playwright UI mode and run feature file
```
npm test
```
#### If you wanna run the test case with mobile config, please comment the web line and enable the mobile line in `playwright.config.ts` file

## Reporting

#### The report is automatically generated in [cucumber-report]() folder. Open the report in web browser to see the result for each execution.
