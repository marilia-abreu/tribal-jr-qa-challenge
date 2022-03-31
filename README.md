# Tribal Jr QA Challenge
This project was developed as part of the Tribal Credit application process. With the purpose of getting a good baseline of our testing skills, this challenge is divided into three parts, to be described soon.

# Sections 

- Create manual test cases
- Create manual tests for a rest API
- Create automated test cases

# Used tools

- Microsoft Excel
- Browsers (Microsoft Edge, Google Chrome)
- Node.js + npm
- Visual Studio Code
- Cypress

Before going through the following instructions, you must have all the used tools installed in your computer. 

# Instructions

- Clone this repository in SSH or https:

``` js
$ git clone https://github.com/marilia-abreu/tribal-jr-qa-challenge.git
```

- To open UI manual tests:
Access the ‘ui-manual-tests.xlsx’ file, in ‘manual-tests’ folder. You can use Microsoft Excel or similar program to open it.

- To open API manual tests:
Access the ‘api-manual-tests.xlsx’’ file, in ‘manual-tests’ folder. You can use Microsoft Excel or similar program to open it.

- To run automated tests:	
Open the repository using mainly Visual Studio Code IDE.
In the application, open a new terminal and run the following commands:
``` js
$ npm install
```
``` js
$ npx cypress open
```

After that, Cypress will open its application window. Then, you must select the test you want to run. 
In this project, there is only one test script, which is called “tribalJobOpenings.spec.js”. 

Click on this test and Google Chrome will open it, by default, and run the automated tests automatically. 

In ‘cypress/videos’ folder, you will find evidence of this test: “tribalJobOpenings.spec.js”.mp4.
