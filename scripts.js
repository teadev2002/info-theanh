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

  let MY_BANK = {
    BANK_ID : "TPBank",
    ACCOUNT_NO : "04076677401"
}
function validateAndHandleNumberInput() {
    const btn = document.querySelectorAll(".btn");
    const numberInput = parseFloat(document.getElementById("number-input").value);
    const content = document.getElementById("content1").value;
    const paid_price = document.getElementById("paid_price");
    const paid_content = document.getElementById("paid_content");
    const qr_img = document.querySelector(".qr_img");
  if (!isNaN(numberInput) && numberInput >= 1000) {
    console.log(`Valid number: ${numberInput}`);
    // Perform any necessary actions on the validated number
    // paid_price.innerHTML = numberInput;
    paid_content.innerHTML = "Thanh toán cho HOANG THE ANH " + content;
    let QR = `https://img.vietqr.io/image/${MY_BANK.BANK_ID}-${MY_BANK.ACCOUNT_NO}-compact2.png?amount=${numberInput}&addInfo=${content}`;
    qr_img.src = QR;

  } else {
    alert('lớn hơn hoặc bằng 1k');
  }
}
