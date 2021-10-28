#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  let page = req.url
  if (page === '/') {page = 'index'}

  page = './' + page + '.html'

  fs.readFile(page, 'utf8', (err, data) => {
    if (err) {
      //console.log (err)

      fs.readFile('./404.html', 'utf8', (err, data) => {
        if (err) {
          console.log('Fatal Error')
          return
        }

        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      })
      return
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})