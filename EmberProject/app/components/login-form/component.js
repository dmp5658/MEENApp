import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
  session: service(),
  currentuser: service(),
  actions: {
    login() {
      this.set('loginError', false);

    const { email, password } = this.getProperties( 'email', 'password');
    const s = this.get('session');

    s.authenticate('authenticator:knockjwt', { email, password }).catch(() => {
        // If login fails, just set an error
        // so the error UI shows up
        this.set('loginError', true);
    });
    if(!this.get('loginError')){
      const curruser = this.get('currentuser');
      curruser.setCurrUser(email);
    }

    },
    signout(){
      const curruser = this.get('currentuser');
      curruser.clearCurrUser();

      this.get('session').invalidate();

    }
  }
});
