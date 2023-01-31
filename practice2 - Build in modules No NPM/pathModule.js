const path = require("path")

//path seperator eks. / for windows og \ for linux
const sep = path.sep


//joining path together
const filepath = path.join("/content", "subfolder", "test.txt")

//Get name of last thing in path example test.txt in this content
const base = path.basename(filepath)

//Get the absolute path.
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
