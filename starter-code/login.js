console.log("login.js loaded");

var userLogin = {username:'killzpanda',password:'omg!!123'};
var correctPassword=null;
for (var x = 0; x<3; x++){
  correctPassword=window.prompt('Enter password for user '+ userLogin['username']);
  if(correctPassword===userLogin.password){
      break;
  }else if (x===2) {
      alert(userLogin.username +' has been temporary freezed')
    } else {
          alert('Password does not match please enter again')
          }
}
