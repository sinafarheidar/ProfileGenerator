const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require('./generateHTML');
const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your favorite color?",
            name: "color"
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        }
    ]).then(function ({ username, color }) {
        const queryURL = `https://api.github.com/users/${username}`

        axios
            .get(queryURL)
            .then(function (response) {
console.log(response)
                // responsepdf = generateHTML(response.data)
                //  fs.writeFile("repo.pdf", responsepdf, function(err) {
                //      if (err) {
                //          return err
                //      }
                //  })
                // writeToFile("repo.pdf", response)
            })
    })




function writeToFile(fileName, data) {
    
}

function init() {

    init();

}