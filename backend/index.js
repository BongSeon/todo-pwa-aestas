  /*
  dependencies
  */

  const { request, response } = require('express')
  const express = require('express')
  let admin = require("firebase-admin") // firebase

  /*
  config - express
  */

  const app = express()

  /*
  config - firebase
  */

  let serviceAccount = require("./serviceAccountKey.json")
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
  
  let db = admin.firestore()


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

