function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInputNumber");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
  function myFunction2() {
    // Get the text field
    var copyText = document.getElementById("myInputBank");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
   
  function openZalo(){
    document.getElementById('overlayZalo').style.display = 'block';
 
  }
  function closeZalo(){
    document.getElementById('overlayZalo').style.display = 'none';
  }


  function openMomo(){
    document.getElementById('overlayMomo').style.display = 'block';

  }
  function closeMomo(){
    document.getElementById('overlayMomo').style.display = 'none';
  }


  function openBank(){
    document.getElementById('overlayBank').style.display = 'block';

  }
  function closeBank(){
    document.getElementById('overlayBank').style.display = 'none';
  }