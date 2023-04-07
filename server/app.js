import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import personsRoute from './controllers/persons.js'
import infoRoute from './controllers/info.js'
import middlewares from './utils/middlewares.js'

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
}

app.use(express.json())
app.use(cors())

morgan.token('persons', (req) => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] :response-time ms :persons')
)

app.use('/', infoRoute)
app.use('/api/persons', personsRoute)

app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

export default app
