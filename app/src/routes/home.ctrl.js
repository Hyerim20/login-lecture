"use strict";
const output = {
    home: (req, res) => {
        res.render("home/index")},
    login: (req, res) => {
        res.render("home/login")},
};    

const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};


module.exports = {
    output,
    process,
};

// { key : key }
// {
//     hello: hello,
//     login : login
// } 이렇게 저장 된거임
