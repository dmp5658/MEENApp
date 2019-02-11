import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options){
    let json = this._super(...arguments);
    console.log("BOODU")
    console.log(json.data.attributes.body);
    json.body = json.data.attributes.body;
    json.title = json.data.attributes.body;
    let newjson = {
      title: json.data.attributes.title,
      body:  json.data.attributes.body
    };
    console.log(newjson);

    return newjson;
  }
});
