import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentuser: service(),

  model() {
    const curruser = this.get('currentuser');

    return this.store.createRecord('blogpost', {
      user: curruser.getCurrUser()
    });
  }

});
