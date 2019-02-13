import Component from '@ember/component';
import { inject } from '@ember/service';
import Ember from 'ember';


export default Component.extend({
  blogpost: null,
  currentuser: inject(),
  router: inject('-routing'),
  actions: {

    save: function (blogpost) {
      console.log(blogpost.title);
      console.log(blogpost.body);
      const curruser = this.get('currentuser');
      console.log(curruser.getCurrUser());
    //  blogpost.user = curruser.getCurrUser();

      console.log('BLOGPOST USER')
      console.log(blogpost.user);
      blogpost.save()
          .then(
            (value) => {
              Ember.Logger.info(value);
            }
          )
          .catch(
            (err) => {
              Ember.Logger.info('failure to save');
              console.log(err);
            }
          )

    }
  }
});
