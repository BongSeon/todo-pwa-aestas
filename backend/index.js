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
    // CORS 세팅 : 모든 origin에 대해 모두 허용
    response.set('Access-Control-Allow-Origin', '*')
    
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

