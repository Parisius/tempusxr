
//Multilanguage part
var langCode = navigator.language.substr (0, 2);
var search_bar = document.getElementsByName("search_field")[0];
fr_path ="../../lang/fr.json";
en_path ="../../lang/en.json";

switch(langCode) {
    case 'fr':
        fetch(fr_path)
        .then(response => {
        return response.json();
        })
        .then(data => search_bar.placeholder = data.search_exp);
      break;
    case 'en':
        fetch(en_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
            search_bar.placeholder = data.search_exp;
         });
      break;
    default:
        fetch("../../lang/fr.json")
        .then(response => {
        return response.json();
        })
        .then(function(data){
            search_bar.placeholder = data.search_exp;
         });
      // code block
  }