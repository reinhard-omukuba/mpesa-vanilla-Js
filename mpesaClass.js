class Mpesa{    
    constructor(env,shortcode){    
      this.name=name;    
      this.age=age;
    }
    
    token(){
      fetch(url)
      .then((resp) => resp.json()) 
      .then(function(data) {
        return data.access_token;
        })
      })  
    }
    
    confirmTrans(){}
    
    validateTrans(){}
  }
  
  class STK extends Mpesa {
    send(phone, amount, ref){
      const url = 'https://randomuser.me/api';

      let data = {
          name: 'Chief'
      }

      let fetchData = { 
          method: 'POST', 
          body: data,
          headers: new Headers()
      }
      fetch(url, fetchData)
      .then(function() {
          
      });
    }
  }