import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
   serialize(snapshot, options){
    let json = this._super(...arguments);

    let newjson = {
      email: json.data.attributes.email,
      password:  json.data.attributes.password
    };
    return newjson;
  }
});
