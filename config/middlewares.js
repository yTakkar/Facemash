const variables = (req, res, next) => {
  let loggedIn = req.session.id ? true : false
  res.locals.session = req.session
  res.locals.loggedIn = loggedIn
  next()
}

const LoggedIn = (req, res, next) => {
  !req.session.id ? res.redirect('/login'): next()
}

const NotLoggedIn = (req, res, next) => {
  req.session.id ? res.redirect('/'): next()
}

// const session_e = (req, res, next) => {
//   let urls = ['/user/login', '/user/signup']
//   if (req.method == 'POST' && !urls.includes(req.url) && !req.session.id){
//     res.redirect('/login')
//   } else {
//     next()
//   }
// }

module.exports = {
  variables,
  LoggedIn,
  NotLoggedIn,
  // session_e,
}
