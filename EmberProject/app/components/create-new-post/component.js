import Component from '@ember/component';
import { inject } from '@ember/service';
import Ember from 'ember';


export default Component.extend({
  blogpost: null,
  router: inject('-routing'),
  actions: {

    save: function (blogpost) {
      console.log(blogpost.title);
      console.log(blogpost.body);
      console.log(blogpost);

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
