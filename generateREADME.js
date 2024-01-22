function generateReadMe(data) {
    return `
    # title
    # ${data.title}

    ## description: write a description of the the project you are working on:
    ${data.description}

     ### Table of contents: installation, usage, license and credits
     ${data.installation}
     ${data.usage}
     ${data.license}
     ${data.credits}

    ## Email: Please type your email
    ${data.email}

    ## Github: Please insert your username for Github
    ${data.github}


    ### Contribute: show how others can contribute to your repo:
    ${data.contributing}

    ### show how you can run tests:
    ${data.test}
    `}

module.exports = generateReadMe;