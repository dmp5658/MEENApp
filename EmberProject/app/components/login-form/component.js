import Component from '@ember/component';

export default Component.extend({

  actions: {
    authenticate() {
       const { login, password } = this.getProperties('login', 'password');

       alert('Success! '+login+' '+password)
    }
  }
});
