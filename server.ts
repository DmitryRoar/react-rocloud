const mongoose = require('mongoose')
const express = require('express')
const app = express()

const {resolve} = require('path')
const config = require('config') 
const cors = require('cors')

const PORT = config.get('port')

app
  .use(cors({
    original: 'http://localhost:3000'
  }))
  .use(express.json({extended: true}))

const start = async (): Promise<void> => {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
  
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()