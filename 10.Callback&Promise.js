//Callback
/*function ramusomu(message,callback){
    setTimeout(function(){
        console.log(message)
        callback();

    },2000)

}
function miniani(){
    console.log("Very strict")
}
ramusomu("How is your college about rules?",miniani)*/
 

//Promise
function isAuthenticated() {
    return Math.random() < 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Successful");
        } else {
          noresponse("Failed");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });