const http = require("http")

const server = http.createServer( (req, res) => {
  if(req.url == "/"){
    res.end('Welcome to the page')
  }
  else if(req.url == "/about"){
    res.end('Welcome to the about page')
  }
  res.end('Cant find the page')
})

server.listen(3000)
