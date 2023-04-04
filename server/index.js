import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import Person from './models/person.js'
import middlewares from './utils/middlewares.js'
import personsRoute from './controllers/persons.js'
import config from './utils/config.js'

const connectToMongoDb = async () => {
  console.log('connecting to MongoDB at', config.MONGODB_URI)
  try {
    mongoose.connect(config.MONGODB_URI)
    console.log('connected to MongoDB')
  } catch (error) {
    console.log('MongoDB connection error:', error.message)
  }
}
connectToMongoDb()

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('persons', (req) => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] :response-time ms :persons')
)

app.get('/health', (req, res) => {
  res.status(200).send('Ok')
})

app.get('/api/info', (req, res) => {
  Person.find({}).then((result) => {
    const count = result.length
    const time = new Date()
    res.send(`<p>Phonebook has info for ${count} people</p><p>${time}</p>`)
  })
})

app.use('/api/persons', personsRoute)

app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

export default app
