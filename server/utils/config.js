import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '../.env' })
}

const { PORT } = process.env
const { MONGODB_URI } = process.env

export default {
  PORT,
  MONGODB_URI,
}
