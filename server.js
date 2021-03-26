const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()


const userRoute = require('./route/user')

const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log("DB connected"))

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//route middleware
app.use('/api', userRoute)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})