import Component from '@ember/component';

export default Component.extend({
    store: Ember.inject.service('store'),

    actions: {

    singupacc: function () {
        if(this.get('password')===this.get('retypedpassword')){
          this.store.createRecord('user', {
            email: this.get('login'),
            password: this.get('password')

          });
          console.log('done');
        }
        else{
          alert("Passwords do not match");
        }

    }
  }

});
