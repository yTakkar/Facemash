require('dotenv').config()

// Require dependencies
const
  express = require('express'),
  hbs = require('express-handlebars'),
  { env: { PORT, SESSION_SECRET_LETTER } } = process,
  hl = require('handy-log'),
  path = require('path'),
  favicon = require('serve-favicon'),
  bodyParser = require('body-parser'),
  validator = require('express-validator'),
  session = require('client-sessions'),
  app = express()

// Require project files
const
  { variables } = require('./config/middlewares'),
  userR = require('./routes/user_routes'),
  facemashR = require('./routes//fm-routes'),
  editR = require('./routes/edit-routes'),
  apiR = require('./routes/api-routes'),
  mainR = require('./routes/main-routes')

// View engine
app.engine('hbs', hbs({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')

// Middlewares
app.use(favicon(
  path.join(__dirname, '/public/images/favicon/favicon.png')
))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(validator())
app.use(session({
  cookieName: 'session',
  secret: SESSION_SECRET_LETTER,
  duration: 60 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}))
app.use(express.static((
  path.join(__dirname, '/public')
)))

// Middleware for some local variables to be used in the template
app.use(variables)

// Routing(mainR route should be placed last)
app.use('/', userR)
app.use('/api', facemashR)
app.use('/api', editR)
app.use('/api', apiR)
app.use('/', mainR)

app.listen(PORT, () => hl.rainbow('App running..') )
