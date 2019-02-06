import Component from '@ember/component';

export default Component.extend({

  actions: {

    createPost: function (newPost) {

      console.log(newPost.title, newPost.text);

    }
  }
});
