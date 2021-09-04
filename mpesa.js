var mpesaConfig = {env: "", headoffice: "", shortcode: ""}

let {env, headoffice, shortcode} = mpesaConfig;

var getToken = function(){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", "https://"+env+".safaricom.co.ke/", true);
  xmlHttp.send(null);
}

var c2bRequest = (phone, amount, ref) => {}

var validateTrans = (transID) => {}

var confirmTrans = (transID = 0) => {}

var reverseTrans = (transID = 0) => {}

var checkBalance = (transID = 0) => {}