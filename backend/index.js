  /*
  dependencies
  */

  const { request, response } = require('express')
  const express = require('express')

  /*
  config - express
  */

  const app = express()

  /*
  endpoint
  */

  app.get('/', (request, response) => {
    response.send('I love Mihye')
  })

  /*
  listen
  */

  app.listen(3000)

