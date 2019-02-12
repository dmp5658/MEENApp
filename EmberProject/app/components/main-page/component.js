import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
    router: service(),
  actions: {
    createPost: function(){
      this.get('router').transitionTo('createpost');
    }
  }
});
