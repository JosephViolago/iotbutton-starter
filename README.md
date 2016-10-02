# Amazon IoT Button Starter Project
Starter project for the Amazon IoT button.

Goal: to serve as read out with statistics about a specific Amazon IoT Button.

## Running the project
To run the webserver to record/report the statistics:
```
> npm start
listening on port 8888
```

The default port is `8888`, but you can override that by setting `process.env.port`.

## Packaging for deployment on AWS Lambda
To package the skill to deploy to AWS Lambda

1. Copy `skill/.env.dist` to `skill/.env` and fill in with your appropriate information.
2. Run `npm run package` to package the skill to upload to AWS Lambda in `skill.zip`

##

## License
MIT