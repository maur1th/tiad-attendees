const express = require('express')
const hbs = require('express-hbs')
const Sequelize = require('sequelize')
var pjson = require('./package.json')


// ORM setup
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {host: DB_HOST})

const Attendee = db.define('attendee', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
})


// App setup
const app = express()
app.use(express.static('public'))

// Template engine
app.engine('hbs', hbs.express4())
app.set('view engine', 'hbs')

// Routes
app.get('/', (req, res) => {
  return Attendee.findAll()
    .then(attendees => {
      res.render('index', {
        count: attendees.length,
        attendees: attendees.map(a => ({firstname: a.firstname, lastname: a.lastname})),
        version: pjson.version,
      })
    })
})

// Server
app.listen(80, function () {
  console.log('Attendee app listening on port 80!')
})
