import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options){
    let json = this._super(...arguments);
    let newjson = {
      title: json.data.attributes.title,
      body:  json.data.attributes.body,
      user:  json.data.attributes.user
    };

    return newjson;
  }
});
