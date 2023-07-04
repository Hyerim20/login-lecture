"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,  
};

// { key : key }
// {
//     hello: hello,
//     login : login
// } 이렇게 저장 된거임
