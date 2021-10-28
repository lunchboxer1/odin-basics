const http = require('http')

const port = process.env.PORT || 3000 //Listen on this port

const server = http.createServer((req, res) => {    //req containts details of the request
  res.statusCode = 200  //res is the response, or data going back to the requester
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {   //Call back when the port is hit
  console.log(`Server running at port ${port}`)
})