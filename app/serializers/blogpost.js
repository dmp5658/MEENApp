'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

module.exports = new JSONAPISerializer('blogposts', {
  attributes: ['title', 'body','datePosted', 'user']
});
