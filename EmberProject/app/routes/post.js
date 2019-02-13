import Route from '@ember/routing/route';

export default Route.extend({

  model(params){
    return this.store.findRecord('blogpost',params.blogpost_id).then(result => {
      console.log('RESULT');
      console.log(result);
      return result;
    });
  }
});
