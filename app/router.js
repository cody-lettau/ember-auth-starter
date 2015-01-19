import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route('login');
	// protected routes that are inaccessible without authentication
	this.route('protected');
});

export default Router;
