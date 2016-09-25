var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js')

var sentryKey = '9fd3a5006e9948378c8b02cd9e36'
var sentryApp = '99035'
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
	name: 'GitHubBattle',
	branch: 'video4',
	version: 1.0 
}

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch, 
	}

}).install()

ReactDOM.render(
	routes,
	document.getElementById('app'));