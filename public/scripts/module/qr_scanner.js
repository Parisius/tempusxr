var langCode = navigator.language.substr (0, 2);
fr_path ="../../lang/fr.json";
en_path ="../../lang/en.json";
result = document.querySelector("#qr-reader-results");
    
    //console.log(document.querySelectorAll('.boxed-text-l')['0'].innerText);
    Html5Qrcode.getCameras().then(devices => {
  /**
   * devices would be an array of objects of type:
   * { id: "id", label: "label" }
   */
  if (devices && devices.length) {
    var cameraId = devices[0].id;
    
    const html5QrCode = new Html5Qrcode("reader",true);
    html5QrCode.start({ facingMode: "environment" }, {fps: 10,qrbox: 250 }, qrCodeMessage => {
        // console.log(`QR matched = ${qrCodeMessage}`);
        if(!qrCodeMessage.startsWith("T-AR"))
        {
          switch(langCode) {
            case 'fr':
              document.querySelectorAll('.boxed-text-l')['0'].innerText=`Cette expérience ${qrCodeMessage} n'existe pas dans TempusXR ou a été supprimée.`;
              $('#menu-warning-1').showMenu();
              break;
            case 'en':
              document.querySelectorAll('.boxed-text-l')['0'].innerText=`This experience ${qrCodeMessage} doesn't exist in TempusXR or has been removed.`;
              $('#menu-warning-1').showMenu();
              break;
            default:
              // code block
          }
            
        }
        else
        {
            //document.location='exp';
            window.location='experiences-details.html';
        }
        html5QrCode.stop().then(ignore => {
        // QR Code scanning is stopped.
        
        }).catch(err => {
        // Stop failed, handle it.
        });
    },errorMessage => {
        
        //console.warn(`QR matched = ${errorMessage}`);
        //result.innerHTML =`We are unable to read your code. Please retry`;
        //console.warn(`QR error = ${errorMessage}`);
    })
    .catch(err => {
    // Start failed, handle it.
    });
  }
}).catch(err => {
  // handle err
});
const html5QrCodeF = new Html5Qrcode("reader",true);
html5QrCodeF.clear();
const fileinput = document.getElementById('qr-input-file');
fileinput.addEventListener('change', e => {

  if (e.target.files.length == 0) {
    // No file selected, ignore 
    return;
  }

  const imageFile = e.target.files[0];
  
  // Scan QR Code
  html5QrCodeF.scanFile(imageFile, true)
  .then(qrCodeMessage => {
    // success, use qrCodeMessage
    if(!qrCodeMessage.startsWith("T-AR"))
        {
          switch(langCode) {
            case 'fr':
              document.querySelectorAll('.boxed-text-l')['0'].innerText=`Cette expérience ${qrCodeMessage} n'existe pas dans TempusXR ou a été supprimée.`;
              $('#menu-warning-1').showMenu();
              break;
            case 'en':
              document.querySelectorAll('.boxed-text-l')['0'].innerText=`This experience ${qrCodeMessage} doesn't exist in TempusXR or has been removed.`;
              $('#menu-warning-1').showMenu();
              break;
            default:
              // code block
          }
        }
        else
        {
            //window.location='https://google.com';
        }
  })
  .catch(err => {
    // failure, handle it.
    //console.log(`Error scanning file. Reason: ${err}`),
    switch(langCode) {
      case 'fr':
        fetch(fr_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
          result.innerHTML =data.scan_fail;
        });
      break;
      case 'en':
        fetch(en_path)
        .then(response => {
        return response.json();
        })
        .then(function(data){
          result.innerHTML =data.scan_fail;
        });
        break;
      default:
        // code block
    }
    
    //document.querySelectorAll('.boxed-text-l')['0'].innerText=`Your file is not a TCode`;
    //`You can scan a TempusCode or upload it by using the button below `;
  });
});