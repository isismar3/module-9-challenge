const fs = require("fs");
const inquirer = require("inquirer");
const generateREADME = require("./generateREADME.js");
// const filePath = require("filePath");
// const dataToWrite = require("dataToWrite");

const questions = [ {
    name: "title",
    type: "input",
    message: "Name your project"
},
{
    name: "email",
    type: "input",
    message: "Insert your email"
},
{
    name: "description",
    type: "input",
    message: "write the description of your project"
},
{
    name: "license",
    type: "input",
    message: "what license did you use?"
},
{
    name: "installation",
    type: "input",
    message: "how do you install?"
},
{
    name: "test",
    type: "input",
    message: "how do you run tests?"
},
{
    name: "usage",
    type: "input",
    message: "what do you need to know for project uses?"
},
{
    name: "contributing",
    type: "input",
    message: "how can you contribute?"
},
{
    name: "github",
    type: "input",
    message: "insert github username here"
}];

// function readMe(fileName, data) {
//     return fs.readMeFileSync(fileName, data)
// 


function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
    const readMeText = generateREADME({...inquirerResponses})
    fs.writeFile("readme.md", readMeText, (err) => { if(err) console.log(err)}); 
    console.log("read me");
    })
};

init();



