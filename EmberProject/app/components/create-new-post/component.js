import Component from '@ember/component';
import { inject } from '@ember/service';
import Ember from 'ember';


export default Component.extend({
  blogpost: null,
  currentuser: inject(),
  router: inject(),
  actions: {

    save: function (blogpost) {

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
          );
      this.get('router').transitionTo('index');
    }
  }
});
