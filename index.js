import app from './server/index.js'
import config from './server/utils/config.js'

app.listen(config.PORT, () => {
  console.log(`Server's running on port ${config.PORT}`)
})
