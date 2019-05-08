# Course Rating API

### Getting Started

These instructions are for Treehouse enabled testers.

  * Ensure mongodb is installed
  * Ensure mongodb is seeded width seed-data from treehouse project files
  * Ensure postman application is installed and course rating api templates are loaded from treehouse project files
  * Ensure mongodb server is running
  * Clone project into desired local folder and change directory to root application folder
  * Run this command `npm install`

### How to Run the Application
  * Run this command `npm start`
  * View application at http://localhost:5000
  * Begin testing API routes using postman

### How to Run Unit Tests
  * Since testing is based on a user with a hash/salt password. You must use the user you created for the unit tests. Change the username:password key:value pair which looks like this `'Authorization': 'Basic ' + Buffer.from("firstlast@email.com:password").toString('base64')` in the `__tests__/api/api_specs.js` file for the test marked with the comment `//first test`
  * Run this command `npm test` on the application folder root