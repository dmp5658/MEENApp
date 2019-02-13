import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),

    actions: {

    singupacc: function () {
        this.set('signupError', false);

        if(this.get('password')===this.get('retypedpassword')){
          this.store.createRecord('user', {
            email: this.get('login'),
            password: this.get('password')

          }).save();
          this.get('router').transitionTo('index');
        }
        else{
          this.set('signupError', true);
        }

    }
  }

});
