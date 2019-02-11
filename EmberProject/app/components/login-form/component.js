import Component from '@ember/component';
export default Component.extend({
  session: Ember.inject.service(),
  actions: {
    login() {
      console.log('login');
      this.set('loginError', false);
          this.set('loginError', false);

    const { email, password } = this.getProperties( 'email', 'password');
    const s = this.get('session');

    s.authenticate('authenticator:knockjwt', { email, password }).catch(() => {
        // If login fails, just set an error
        // so the error UI shows up
        this.set('loginError', true);
    });

    },
    signout(){
      console.log('signout');
      this.get('session').invalidate();

    }
  }
});
