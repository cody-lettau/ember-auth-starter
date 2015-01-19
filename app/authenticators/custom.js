import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
	tokenEndpoint: '/v1/auth',

	restore: function(data) {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (!Ember.isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
	},

	authenticate: function(credentials) {
		var _this = this;
		return new Ember.RSVP.Promise(function(resolve, reject) {
			if (credentials.identification === 'cody' && credentials.password === 'abc123') {
				Ember.run(function() {
					resolve({ token: 'fakeTokenString'});
				});
			} else {
				Ember.run(function() {
					reject("Authentication error");
				});
			}

			// Ember.$.ajax({
			// 	url:         'http://localhost:8000/v4/session',
			// 	type:        'POST',
			// 	data:        JSON.stringify({ session: { identification: credentials.identification, password: credentials.password } }),
			// 	contentType: 'application/json'
			// }).then(function(response) {
			// 	Ember.run(function() {
			// 		resolve({ token: response.session.token });
			// 	});
			// }, function(xhr, status, error) {
			// 	var response = JSON.parse(xhr.responseText);
			// 	Ember.run(function() {
			// 		reject(response.error);
			// 	});
			// });
		});
	},

	invalidate: function() {
		var _this = this;
		return new Ember.RSVP.Promise(function(resolve) {
			Ember.$.ajax({ url: _this.tokenEndpoint, type: 'DELETE' }).always(function() {
				resolve();
			});
		});
	}
});