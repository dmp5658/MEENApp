import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run, get } = Ember;

export default Base.extend({

    tokenEndpoint: `http://localhost:3000/login`,

  restore(data) {
     return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(creds) {
    const { email, password } = creds;

    const data = JSON.stringify({

        email, password

    });
    console.log("AFTER STRINGIFY");
    console.log(data);

    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data: {
        "email": email,
        "password" : password
      },
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json'

    };
    console.log(requestOptions);

    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { jwt } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: jwt
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
