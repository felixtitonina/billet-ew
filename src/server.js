const express = require('express');
const routes = require('./routes/routes');
require('dotenv-flow').config()
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(routes)

const port = process.env.PORT || 3333
console.log(`Start projeto: localhost:${port}` )
app.listen(port)
