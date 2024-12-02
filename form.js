// Get ELements
let inpName = document.getElementById("inpName")
let inpEmail = document.getElementById("inpEmail")
let inpMsg = document.getElementById("inpMsg")

let errorEleName = document.getElementById("errorEleName")
let errorEleEmail = document.getElementById("errorEleEmail")
let errorEleMsg = document.getElementById("errorEleMsg")


let contactForm = document.getElementById("contactForm")
let btnSubmit = document.getElementById("btnSubmit")

let popupSuccess = document.getElementById("popupSuccess")
let popupError = document.getElementById("popupError")
let senderName = document.getElementById("senderName")

let errName = true;
let errEmail = true;
let errMsg = true;


function checkNameError() {
    if (inpName.value.length <= 2) {
        inpName.classList.add("st-err")
        errorEleName.style.cssText = "display: block";
        setTimeout(() => {
            errorEleName.classList.add("act");
        }, 100);
        errName = true;
    } else {
        inpName.classList.remove("st-err")
        errorEleName.classList.remove("act");
        setTimeout(() => {
            errorEleName.style.cssText = "display: none";
        }, 100);
        errName = false;
    }
}

function checkEmailError() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inpEmail.value)) {
        inpEmail.classList.add("st-err")
        errorEleEmail.style.cssText = "display: block";
        setTimeout(() => {
            errorEleEmail.classList.add("act");
        }, 100);
        errEmail = true;
    } else {
        inpEmail.classList.remove("st-err")
        errorEleEmail.classList.remove("act");
        setTimeout(() => {
            errorEleEmail.style.cssText = "display: none";
        }, 100);
        errEmail = false;
    }
}

function checkMsgError() {
    if (inpMsg.value.length < 10) {
        inpMsg.classList.add("st-err")
        errorEleMsg.style.cssText = "display: block";
        setTimeout(() => {
            errorEleMsg.classList.add("act");
        }, 100);
        errMsg = true;
    } else {
        inpMsg.classList.remove("st-err")
        errorEleMsg.classList.remove("act");
        setTimeout(() => {
            errorEleMsg.style.cssText = "display: none";
        }, 100);
        errMsg = false;
    }
}

inpName.addEventListener('input', checkNameError);
inpEmail.addEventListener('input', checkEmailError);
inpMsg.addEventListener('input', checkMsgError);

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    checkNameError();
    checkEmailError();
    checkMsgError();
    if (!errName && !errEmail && !errMsg) { 
        sendFormData();
    } else {
        console.log("Input errors");
    }
})


function sendFormData() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = function() {
        if (xhr.status === 200) {
            senderName.innerText = inpName.value;
            btnSubmit.disabled = true;
            popupSuccess.style.cssText = "display: flex";
            setTimeout(() => {
                popupSuccess.classList.add("act");
                setTimeout(() => {
                    popupSuccess.classList.remove("act");
                    setTimeout(() => {
                        popupSuccess.style.cssText = "display: none";
                    }, 100);
                }, 6000);
            }, 100);
            form.reset();
        } else {
            popupError.style.cssText = "display: flex";
            setTimeout(() => {
                popupError.classList.add("act");
                setTimeout(() => {
                    popupError.classList.remove("act");
                    setTimeout(() => {
                        popupError.style.cssText = "display: none";
                    }, 100);
                }, 6000);
            }, 100);
            console.log("Issue with the submission.");
            btnSubmit.disabled = true;
        }
    };
    xhr.send(formData);
}
