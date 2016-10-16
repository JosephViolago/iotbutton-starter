# Amazon IoT Button Starter Project
Starter project for the Amazon IoT button.

Goal: to provide a read out of statistics about a specific Amazon IoT Button.

## Running the web server
To run the webserver to record/report the statistics:
```
> npm start
listening on port 8888
```

The default port is `8888`. To change the port, copy `.env.dist` to `.env` and fill in the `port` variable.

## The site
With the server running, navigate to [`http://localhost:8888`](http://localhost:8888). You'll see a page with some statistics about the button running the associated skill, as well as a button to trigger each kind of press.

## Packaging for deployment on AWS Lambda
To package the skill to deploy to AWS Lambda

1. Copy `skill/.env.dist` to `skill/.env` and fill in with your appropriate information.
2. Run `npm run package` to package the skill to upload to AWS Lambda in `skill.zip`

## Todos
These are the things on the top of my priority list

0. Turn this in to a proper React app. Use [Create React App](https://github.com/facebookincubator/create-react-app)
1. Connect to a proper DB to store log/store button presses (brainstorm other things to store)
2. Convert server from Express to [`Koa`](https://github.com/koajs/koa)?
3. Design/implement metrics screens

## License
MIT