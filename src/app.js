import 'dotenv/config'

import express from 'express'
import routes from './routes'
import helmet from 'helmet'
// import './database/index'

const app = express()

app.use(helmet())
app.use(express.json())
app.use(routes)

// 404 Route
app.use((req, res) => {
  return res.status(404).json('page not found')
})

export default app
