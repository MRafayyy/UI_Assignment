let form = document.getElementsByTagName("form")[0];  /* included for transition */
let Welc_page = document.getElementsByClassName("Welc-page")[0];  /* included for transition */

function verify() {


    form.classList.add("extra-height");  /* included for transition */
    form.classList.remove("h")
    Welc_page.classList.add("extra-height");  /* included for transition */
    Welc_page.classList.remove("h")

    let error = document.getElementById("error");
    let erroru = document.getElementById("erroru");
    error.innerHTML = "";
    erroru.innerHTML = "";
    error.classList.remove("error-style") /* added this to remove that pass contain error*/

    let username_ = document.getElementById("username")
    let password_ = document.getElementById("password")
    let cpassword_ = document.getElementById("cpassword")
    // var password_ = password;
    // var username_ = username;
    // var cpassword_ = cpassword;




    let regex_specialchar = /(?=.*?[.#?!@$%^&*-])/
    let regex_numbers = /(?=.*?[0-9])/
    let regex_CapAlphabet = /(?=.*?[A-Z])/
    let regex_SmallAlphabet = /(?=.*?[a-z])/

  

    if (username_.value.trim() == "") {
        username_.classList.add("error-styles");
        erroru.innerHTML = "<p>*Username field is empty</p>";
    } else {
        username_.classList.remove("error-styles");
        erroru.innerHTML = "";
    }


    if (password_.value.trim() == "") {
        password_.classList.add("error-style");
        erroru.innerHTML += "<p>*Password field is empty</p>";

    } else {

        error.innerHTML = "Password must contain: "

        if (!password_.value.trim().match(regex_numbers)) {

            error.classList.add("error-style");
            error.innerHTML += "<li>At least one digit </li>"

        }

        if (!password_.value.trim().match(regex_SmallAlphabet)) {

            error.classList.add("error-style");
            error.innerHTML += "<li>At least one lowercase character <code>[a-z]</code></li>"

        }
        if (!password_.value.trim().match(regex_CapAlphabet)) {

            error.classList.add("error-style");
            error.innerHTML += "<li>At least one uppercase character <code>[A-Z] </code></li>"

        }
        if (!password_.value.trim().match(regex_specialchar)) {

            error.classList.add("error-style");
            error.innerHTML += "<li>At least one special character <code>[*.!@#$%^&amp;(){}[]:;&lt;&gt;,.?/~_+-=|\]</code></li>"

        }
        if (password_.value.trim().length < 8 || password_.value.trim().length > 32) {

            error.classList.add("error-style");
            error.innerHTML += "<li>At least 8 characters in length, but no more than 32.</li>"

        }

        if (!error.classList.contains("error-style")) {

            error.innerHTML = " "


            if (password_.value.trim() == cpassword_.value.trim()) {
                error.innerHTML = ""
                error.innerHTML = "<li> Passwords match </li>"
                document.querySelector(".error").getElementsByTagName("li")[0].style.listStyle = "none"
                document.querySelector(".error").getElementsByTagName("li")[0].style.color = "green"
            

            }

            else {
                error.innerHTML = "<li> Passwords do not match </li>"
                document.querySelector(".error").getElementsByTagName("li")[0].style.listStyle = "none"


            }



        }


    }


}




function side(){
    Welc_page.classList.toggle("pos-center")
    Welc_page.classList.toggle("pos-right")

    form.classList.toggle("pos-form-center")
    form.classList.toggle("pos-form-left")

    
}