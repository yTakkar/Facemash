const
  app = require('express').Router(),
  db = require('../config/db')

// GET USERS FOR FACEMASH
app.post('/users-for-facemash', async (req, res) => {
  let
    { id } = req.session,
    users = await db.query('SELECT id, username FROM users WHERE id <> ? ORDER BY RAND() LIMIT 2', [ id ])
  res.json(users)
})

// FOR VOTING USER IN THE FACEMASH
app.post('/vote', async (req, res) => {
  let { user, against } = req.body
  await db.query('UPDATE facemash_stats SET votes=votes+1, facemash_count=facemash_count+1 WHERE user=?', [ user.id ])
  await db.query('UPDATE facemash_stats SET facemash_count=facemash_count+1 WHERE user=?', [ against.id ])
  res.json({ mssg: `You voted ${user.username}!!` })
})

// GET FAMCEMASH STATS OF A USER ON THE PROFILE PAGE
app.post('/user-facemash-details', async (req, res) => {
  let
    { username } = req.body,
    ranking,
    [{ facemash_count, votes }] = await db.query('SELECT facemash_count, votes FROM facemash_stats WHERE username=? LIMIT 1', [ username ]),
    [{ greater }] = await db.query('SELECT COUNT(votes) AS greater FROM facemash_stats WHERE votes > ?', [ votes ])

  ranking = greater == 0 ? 1 : greater

  res.json({
    facemash_count,
    ranking,
    votes
  })
})

// GET TOP FACEMASH USERS
app.post('/get-top-users', async (req, res) => {
  let
    { id } = req.session,
    users = await db.query('SELECT stats_id, votes, user, username, facemash_count FROM facemash_stats WHERE user <> ? ORDER BY votes DESC', [ id ])
  res.json(users)
})

module.exports = app
