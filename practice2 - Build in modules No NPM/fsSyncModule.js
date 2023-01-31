const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//Skriv flag: a, hvis du vil have at den bare skrive vidre, ellers bare lad vær med at add trejde argument.
writeFileSync("./content/results.txt", `Here is the result: ${first}, ${second}`, {flag: 'a'})
