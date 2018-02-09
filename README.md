A simple static website, built with create-react-app.

# visit online:

`www.artandnight.com`

# try locally:

`clone https://github.com/xiaoju/artandnight.git`
`cd activeLink`
`npm install` (or `yarn install`)
`npm start` (or `yarn start`)
visit `http://localhost:3000`

# deploy to Heroku:

* prerequisites:

  * git and heroku free accounts

* set the create-react-app Heroku buildpack:

`heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git`

* deploy

`git push heroku master`
