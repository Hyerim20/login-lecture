"use strict";

const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        passsword: password.value,
    };
    
    fetch("/login", {
        mothd: "POST",
        headers: {
            "Content-Type": "application/josn",
        },
        body: JSON.stringify(req)
    });
}