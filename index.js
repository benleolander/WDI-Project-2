require('dotenv').config()

const express = require('express')

const { port } = require('./config/environment')

const app = express()

app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`Express is running on Port ${port}`))
