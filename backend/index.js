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
  endpoint - tasks
  */

  app.get('/tasks', (request, response) => {
    let tasks = []

    db.collection('tasks').orderBy('id', 'asc').get().then(snapshot => {
      snapshot.forEach(doc => {
        tasks.push(doc.data())
      })
      response.send(tasks)
    })
  })

  /*
  listen
  */

  app.listen(3000)

