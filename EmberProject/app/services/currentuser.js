import Service from '@ember/service';

export default Service.extend({
email:null,
  getCurrUser(){
    return this.email;
  },
  setCurrUser(email){
    this.email=email;
  },
  clearCurrUser(){
    this.email=null;
  }
});
