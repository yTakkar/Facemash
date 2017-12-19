const
  app = require('express').Router(),
  db = require('../config/db')

// GET USER DETAIS
app.post('/get-user-details', async (req, res) => {
  let details = await db.query('SELECT id, username, email, bio, joined, email_verified FROM users WHERE username=?', [ req.body.username ])
  res.json(details[0])
})

// FOR CHECKING IF IT'S A VALID USER
app.post('/is-user-valid', async (req, res) => {
  let [{ userCount }] = await db.query('SELECT COUNT(id) AS userCount FROM users WHERE username=? LIMIT 1', [req.body.username])
  res.json(userCount == 1 ? true : false)
})

// FOR VIEWING THE PROFILE
app.post('/view-profile', async (req, res) => {
  let
    { username } = req.body,
    { id: session } = req.session,
    id = await db.getId(username),
    [{ time: dtime }] = await db.query('SELECT MAX(view_time) as time FROM profile_views WHERE view_by=? AND view_to=?', [session, id]),
    time = parseInt(new Date().getTime() - parseInt(dtime))

  if (time >= 120000 || !dtime) {
    let insert = {
      view_by: session,
      view_by_username: username,
      view_to: id,
      view_time: new Date().getTime()
    }
    await db.query('INSERT INTO profile_views SET ?', insert)
  }

  res.json('Hello, World!!')
})

// GET PROFILE VIEWS
app.post('/get-profile-views', async (req, res) => {
  let
    { username } = req.body,
    id = await db.getId(username),
    [{ count }] = await db.query('SELECT COUNT(view_id) AS count FROM profile_views WHERE view_to=?', [id])
  res.json(count)
})

module.exports = app
