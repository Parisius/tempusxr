var langCode = navigator.language.substr (0, 2);
fr_path ="../../lang/fr.json";
en_path ="../../lang/en.json";
var nbview_text = document.getElementById("nbview");
var nbview;
nbview="200"
switch(langCode) {
    case 'fr':
        fetch(fr_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
           nbview_text.innerHTML = data.view+" "+nbview + " vues";
        });
      break;
    case 'en':
        fetch(en_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
            nbview_text.innerHTML = data.view+" "+nbview + " views";
         });
      break;
    default:
      // code block
  }