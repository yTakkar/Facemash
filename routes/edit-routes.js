const
  app = require('express').Router(),
  db = require('../config/db'),
  mail = require('../config/mail'),
  root = process.cwd(),
  upload = require('multer')({
    dest: `${root}/public/temp/`
  }),
  { ProcessImage, DeleteAllOfFolder } = require('handy-image-processor')

// FOR GETTING THE COUNT OF GIVEN FIELD
app.post('/what-exists', async (req, res) => {
  let
    { what, value } = req.body,
    [{ count }] = await db.query(`SELECT COUNT(${what}) AS count FROM users WHERE ${what}=?`, [value])
  res.json(count)
})

// EDIT PROFILE
app.post('/edit-profile', async (req, res) => {
  let
    { username, email, bio } = req.body,
    { id: session } = req.session

  req.checkBody('username', 'Username is empty').notEmpty()
  req.checkBody('username', 'Username must contain only leters').isAlpha()
  req.checkBody('username', 'Username must be greater than 4').isLength({ min: 4 })
  req.checkBody('username', 'Username must be less than 32').isLength({ max: 32 })

  req.checkBody('email', 'Email is empty').notEmpty()
  req.checkBody('email', 'Email is invalid').isEmail()

  let errors = await req.getValidationResult()

  if (!errors.isEmpty()) {
    let array = []
    errors.array().forEach(item => array.push(item.msg))
    res.json({ mssg: array })
  } else {
    req.session.username = username
    await db.query('UPDATE users SET username=?, email=?, bio=? WHERE id=?', [username, email, bio, session])
    res.json({
      mssg: 'Profile edited!!',
      success: true
    })
  }

})

// FOR RESENDING THE VERIFICATION LINK
app.post('/resend_vl', async (req, res) => {
  let
    { id } = req.session,
    [{ username, email }] = await db.query('SELECT username, email FROM users WHERE id=?', [id]),
    url = `http://localhost:${process.env.PORT}/deep/most/topmost/activate/${id}`,
    options = {
      to: email,
      subject: 'Activate your Facemash account',
      html: `<span>Hello ${username}, You received this message because you created an account on Facemash.<span><br><span>Click on button below to activate your account and explore.</span><br><br><a href='${url}' style='border: 1px solid #1b9be9; font-weight: 600; color: #fff; border-radius: 3px; cursor: pointer; outline: none; background: #1b9be9; padding: 4px 15px; display: inline-block; text-decoration: none;'>Activate</a>`
    }
  await mail(options)
  res.json({ mssg: 'Verification link sent to your email!!' })
})

// CHANGING THE AVATAR
app.post('/change-avatar', upload.single('avatar'), async (req, res) => {
  let
    { file, session } = req,
    obj = {
      srcFile: file.path,
      width: 200,
      height: 200,
      destFile: `${root}/public/users/${session.id}/avatar.jpg`
    }

  await ProcessImage(obj)
  await DeleteAllOfFolder(`${root}/public/temp/`)

  res.json({ mssg: 'Avatar changed!!' })
})

module.exports = app
