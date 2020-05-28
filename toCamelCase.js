const toCamelCase = (str) => {

    // create a variable

    // split string on the spaces and put it in an array
    const noSpace = str.split(' ');

    // iterate over array and upper case the first letter of each word
    const upperSpace = noSpace.map(str => str[0].toUpperCase() + str.substr(1))

    // join words from array into string
    const joinString = upperSpace.join("")

    // split words on the dash symbol and put it in an array
    const noDash = joinString.split('-');

    // iterate over array and upper case first letter of each word
    const upperDash = noDash.map(str => str[0].toUpperCase() + str.substr(1))

    // join words wih underscore
    const joinUnderscore = upperDash.join("_");

    // return variable and lower case first letter
    return joinUnderscore[0].toLowerCase() + joinUnderscore.substr(1)

    // const noSpace = str.split(' ')
    //     .map(str => str[0].toUpperCase() + str.substr(1))
    //     .join("")
    //     .split('-')
    //     .map(str => str[0].toUpperCase() + str.substr(1))
    //     .join("_");

    // return noSpace[0].toLowerCase() + noSpace.substr(1);
}

module.exports = toCamelCase;