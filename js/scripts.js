new Date().getFullYear()  // returns the current year
document.getElementById("year").innerHTML = new Date().getFullYear();


function formInputNotEmpty() {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var $$mail = document.getElementById("email")
    if(
        document.getElementById("name").value=== ""
        || document.getElementById("email").value===""
        || !$$mail.value.match(emailReg)
        || document.getElementById("message").value===""
        || !document.getElementById("privacy").checked){

           document.getElementById('submit-button-form').disabled = true;
           document.getElementById('tooltiptext').style.display  = "inline-block";

        } else {
            document.getElementById('submit-button-form').disabled = false;
            document.getElementById('tooltiptext').style.display  = "none";
       }
   }

