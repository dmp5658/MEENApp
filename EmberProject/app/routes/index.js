import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


let blogposts = [
  {
    "_id": "5c588e1bc23c5e5620c59b4e",
    "title": "Helloooo",
    "body": "teeest",
    "datePosted": "2019-02-04T19:10:19.422Z",
    "__v": 0
  },
  {
    "_id": "5c589c1f773a76461cf1e4be",
    "title": "titletest",
    "body": "bodytest",
    "datePosted": "2019-02-04T20:10:07.790Z",
    "__v": 0
  },
  {
    "_id": "5c58becee53d4925a88c20fb",
    "title": "titletest2",
    "body": "titletest2",
    "datePosted": "2019-02-04T22:38:06.660Z",
    "__v": 0
  },
  {
    "_id": "5c58cf647d0a52086c5aac5d",
    "body": "rere",
    "title": "rerere",
    "datePosted": "2019-02-04T23:48:52.477Z",
    "__v": 0
  }
];


export default Route.extend({

  session: service(),
  activate: function() {
    console.log('INDEX LOG');
    console.log(this.get('session.isAuthenticated'));
  },
  model() {

   // console.log("IN ROUTE");
   // console.log(blogposts);
    //var code = this.store.findAll('blogpost');
    //console.log(typeof code);
    //console.log(code);
    return blogposts;
    //console.log(this.store.findAll('blogpost'));


    /*
    return this.store.findAll('blogpost').then(result => {
      console.log(result);

      return result;
    });
*/
  }


});
