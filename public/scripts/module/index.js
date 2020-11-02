//Multilanguage part
var langCode = navigator.language.substr (0, 2);
fr_path ="../../lang/fr.json";
en_path ="../../lang/en.json";
var username = document.getElementsByName("username")[0];
var password = document.getElementsByName("password")[0];
var email = document.getElementsByName("email")[0];
var username_r = document.getElementsByName("username_r")[0];
var password_r = document.getElementsByName("password_r")[0];
var email_f = document.getElementsByName("email_f")[0];
console.log(username)

switch(langCode) {
    case 'fr':
        fetch(fr_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
           username.placeholder = data.username;
           password.placeholder = data.password;
           email.placeholder = data.email;
           username_r.placeholder = data.username;
           password_r.placeholder = data.password;
           email_f.placeholder = data.email;
        });
      break;
    case 'en':
        fetch(en_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
            username.placeholder = data.username;
           password.placeholder = data.password;
           email.placeholder = data.email;
           username_r.placeholder = data.username;
           password_r.placeholder = data.password;
           email_f.placeholder = data.email;
         });
      break;
    default:
      // code block
  }