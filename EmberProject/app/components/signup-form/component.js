import Component from '@ember/component';

export default Component.extend({

    actions: {

    singupacc: function () {
        if(this.get('password')===this.get('retypedpassword')){
          this.store.createRecord('user', {
            email: this.get('login'),
            password: this.get('password')

          }).save();
          console.log('done');
        }
        else{
          alert("Passwords do not match");
        }

    }
  }

});
