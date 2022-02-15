const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = ({title, task, goal, specifications, emphasis}) => 
  (`# ${title}

  ## Task: ${task}
  * Goal:  ${goal}
  * Specifications: ${specifications}  
  * Points of Emphasis:${emphasis} `)

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What will the title of your README be?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your task?',
      name: 'task',
    },
    {
      type: 'input',
      message: 'What is the goal?',
      name: 'goal',
    },
    {
      type: 'input',
      message: 'What are the specifications?',
      name: 'specifications',
    },
    {
        type: 'input',
        message: 'What are the points of emphasis?',
        name: 'emphasis',
      }
  ]).then((response) => (
    fs.writeFile('index.md', generateMD(response), (err) => {
        if (err) throw err;
        console.log('the responses have been saved!');
    })
  ));