const os = require("os")

//Info about user
const user = os.userInfo();


//Returns the system uptime in seconds
const uptime = os.uptime()

//Users os

const currentos = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
}
console.log(currentos);
