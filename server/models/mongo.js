const mongoose = require('mongoose')
const mongoUser = process.env.mongoUser
const mongoPass = process.env.mongoPass
const mongoDB = `mongodb+srv://${mongoUser}:${mongoPass}@quactics.ggdc4.mongodb.net/quactics?retryWrites=true&w=majority`

// Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
// Database connection to be passed around
const mongo = mongoose.connection

mongo.on('connected', () => {
    console.log('MongoDB connection open.')
})

mongo.on('error', console.error.bind(console, 'MongoDB connection error.'))

mongo.on('disconnected', () => {
    console.log('MongoDB connection disconnected.')
})

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {   
    mongo.close(() => { 
      console.log('Mongoose default connection disconnected through app termination') 
      process.exit(0)
    })
})

// Bring in Schemas
const schemas = require('../models')