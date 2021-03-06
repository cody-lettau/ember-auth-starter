import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	// request some data from the server so that the authorizer authorizes that request
	model: function() {
		return new Ember.RSVP.Promise(function(resolve, reject) {
			// TODO: Get common protected page data
			resolve();
		});
	}
});