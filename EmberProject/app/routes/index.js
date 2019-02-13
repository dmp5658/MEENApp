import Route from '@ember/routing/route';


let blogposts = [ { "_id": "5c644147cbeaeb03dc6283fd",
    "title": 'test6',
    "body": 'test6',
    "user": 'test3@test.com',
    "datePosted": "2019-02-13T16:09:43.847Z",
    "__v": "0"} ]
;


export default Route.extend({

  model() {

   // console.log("IN ROUTE");
   // console.log(blogposts);
    //var code = this.store.findAll('blogpost');
    //console.log(typeof code);
    //console.log(code);
    //return blogposts;
    //console.log(this.store.findAll('blogpost'));



    return this.store.findAll('blogpost').then(result => {
      console.log(result);

      return result;
    });
  }


});
