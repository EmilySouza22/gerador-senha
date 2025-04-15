let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    const charsetLength = charset.length;
    const passwordSize = sliderElement.value;
    let _password = "";
    let index = 0;
    while (index < passwordSize) {
      _password += charset.charAt(Math.floor(Math.random() * charsetLength)) 
      index++;
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = _password;
}

function copyPassword(){
    return navigator.clipboard.writeText(password.innerHTML);
}

