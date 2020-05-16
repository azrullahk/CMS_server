if (process.env.NODE_ENV=="development" || process.env.NODE_ENV=="test") {
    require('dotenv').config()
}

let express = require('express')
let app = express()
let router = require('./routes')
let cors = require('cors')

app.use(express.urlencoded({ extended : false }))
app.use(express.json())

app.use(cors())
app.use(router)

module.exports = app