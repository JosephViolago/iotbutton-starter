# Amazon IoT Button Starter Project
Welcome to my starter project for the Amazon IoT button. It's goal is to serve as a metrics dashboard for how often a specific button is pressed.

## Running the project
To run the webserver to record the metrics `npm start`.

## Packaging for deployment on AWS Lambda
1. Copy `skill/env.dist.js` to `skill/env.js` and fill in with your appropriate information.
2. Run `npm run package` to package the skill to upload to AWS Lambda in `skill.zip`
