import RSVP from 'rsvp';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      console.log(this.get('session.data.authenticated.token'));
      const accountId = this.get('session.data.authenticated.account_id');
      if (!isEmpty(accountId)) {
        this.get('store').find('user', accountId).then((user) => {
          this.set('user', user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});