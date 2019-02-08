'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('user', {
  attributes: ['email', 'password']
});
