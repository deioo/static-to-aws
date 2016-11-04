# deioo.uk

A static website compiled using Grunt tasks that can be deployed online in no time.

## Local Project Setup

* Run `bin/setup` _(first time only)_
* Run `bin/start`
* `open dist/index.html`

## Amazon S3 Setup

* [Getting started with AWS S3](http://docs.aws.amazon.com/gettingstarted/latest/swh/setting-up.html)
* [Setting up DNS](http://docs.aws.amazon.com/gettingstarted/latest/swh/getting-started-configure-route53.html)
* Rename `aws-keys.json.example` to `aws-keys.json`
* Update your AWS S3 credentials in `aws-keys.json`

## Deploy to S3

* Run `bin/deploy`
* Enjoy


## Update the Content

The project contains a static `dist/index.html` and an `dist/error.html` that can be edited manually.
The CSS from `dist/styles` compiles, autoprefixes and minifies `styles/application.scss`
