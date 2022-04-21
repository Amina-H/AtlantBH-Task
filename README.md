# Description


This repository is created as a part of a project/task done for the selection process for Atlant BH.

Part of the project was to investigate [demo e-commerce application](http://automationpractice.com/index.php) and to write test cases for this application concentrating on real user flows.

After identifying Smoke Test from the test cases created, the next step was to automate that smoke test with a programming/scripting language and testing framework of choice.

Smoke test which is identified has two Test Scenarios TS129 and TS130. For this purpose only one was updated.

Therefore, the Github repository was created for the purpose and pushing the assignment solution so it can be readily available for review.

The test is written in the Cypress framework which is built on JavaScript.

# Test Plan

Test Plan for this project can be found on the following [link](https://drive.google.com/file/d/1a4wFtOmEUSpIJkVQp5ounVzwAh-5ZIH_/view?usp=sharing)

# Test Cases
Test cases for this can be found on following [link](https://docs.google.com/spreadsheets/d/1GGFunv57BPT8v7LWxMtKAUYrTHG-d_3t/edit?usp=sharing&ouid=100890107650147158766&rtpof=true&sd=true)

# Bugs

Reported bugs can be found on this [trello board](https://trello.com/b/pKb26Wvf/atlantbh-bug-reports)


# Smoke Test

## Install Cypress

[Follow these instructions to install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress).

Cypress is a NodeJS based automation tool, available as an npm package. Cypress can be also downloaded as an installer, but the recommended way is to install from npm.

```bash

npm install cypress --save-dev

```

## Run Cypress



To run test in the headless mode

```bash

cypress run

```
or do it via Cypress UI
```bash

cypress open

```

# License

[MIT](https://choosealicense.com/licenses/mit/)