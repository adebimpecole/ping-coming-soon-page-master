(function(){
    "use strict";
    const email = document.getElementById("txt");
    const err = document.querySelector(".error");
    const form = document.getElementById("realdeal");


    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const checkEmail = () => {
            const eml = email.value.trim();
            if (eml ===""){
                showError("Whoops! It looks like you forgot to add your email");
            }
            else if (!isEmailValid(eml)) {
                showError("Please provide a valid email address");
            }
            else{
                err.innerHTML = "";
                email.style.borderColor = "hsl(0, 0%, 59%)";
            }
        };

        const showError = (error) => {
            err.innerHTML = "";
            err.innerHTML += error;
            email.style.borderColor = "hsl(354, 100%, 66%)";
        };

        const isEmailValid = (eml) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(eml);
        };

        checkEmail();
    });
})();