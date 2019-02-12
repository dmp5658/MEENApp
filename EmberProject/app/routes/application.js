import { inject as service } from '@ember/service';
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    console.log('IN CURR SESS');
    return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate());
  },
  model() {

    // return this.store.findAll('blogpost');
  }
});
