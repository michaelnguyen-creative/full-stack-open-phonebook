import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const PORT = process.env.PORT || 3001
const { MONGODB_URI } = process.env

export default {
  PORT,
  MONGODB_URI,
}
