import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
	// clear a potentially stale error message from previous login attempts
	setupController: function(controller, model) {
		controller.set('errorMessage', null);
	}
});